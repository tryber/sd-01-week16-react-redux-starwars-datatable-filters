import React from "react";
import { connect } from "react-redux";
import { finalFilter } from "../actions/filters";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  filterByName(data) {
    const { nameFilter } = this.props;
    if (nameFilter) {
      return this.filterByValues(
        data.filter(planet => planet.name.includes(nameFilter))
      );
    }
    return this.filterByValues(data);
  }

  findComparisons(valueFilter, data) {
    const { column, comparison, value } = valueFilter;
    switch (comparison) {
      case "Maior":
        return data.filter(
          planet =>
            planet[column] > Number(value) && planet[column] !== "unknown"
        );
      case "Menor":
        return data.filter(
          planet =>
            planet[column] < Number(value) && planet[column] !== "unknown"
        );
      case "Igual":
        return data.filter(
          planet =>
            planet[column] === Number(value) && planet[column] !== "unknown"
        );
      default:
        return false;
    }
  }

  filterByValues(data) {
    const { valueFilter } = this.props;
    if (valueFilter !== "") {
      const result = this.findComparisons(valueFilter.numeric_values, data);
      this.setState({ data: result });
    }
    this.setState({ data: data });
  }

  showFilters() {
    const { filtersActive } = this.props;
    if (filtersActive.length > 0) {
      return filtersActive.map(filter => {
        this.filterByName(this.state.data);
        return (
          <p
            key={filter.column}
          >{`${filter.column} - ${filter.comparison} - ${filter.value}`}</p>
        );
      });
    } else {
      this.filterByName(this.props.initialData.results);
    }
  }

  render() {
    return (
      <div>
        <p>Filters active:</p>
        <div>{this.showFilters()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nameFilter: state.textFilterReducer.filters,
    valueFilter: state.valueFilterReducer.filters,
    filtersActive: state.valueFilterReducer.columns,
    initialData: state.apiServiceReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendFinalFilter: data => dispatch(finalFilter(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
