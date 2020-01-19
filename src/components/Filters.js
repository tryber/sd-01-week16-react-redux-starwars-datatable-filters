import React from "react";
import { connect } from "react-redux";
import { finalFilter } from "../actions/filters";

class Filters extends React.Component {
  filterByName() {
    if (this.props.nameFilter) {
      return this.filterByValues(
        this.props.data.results.filter(planet =>
          planet.name.includes(this.props.nameFilter)
        )
      );
    }
    return this.filterByValues(this.props.data.results);
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
      return this.props.sendFinalFilter(result);
    }
    return this.props.sendFinalFilter(data);
  }

  showFilters(filters) {
    if (filters.length > 0) {
      return filters.map(filter => {
        return (
          <p
            key={filter.column}
          >{`${filter.column} - ${filter.comparison} - ${filter.value}`}</p>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <p>Filters active:</p>
        <div>{this.showFilters(this.props.filtersActive)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nameFilter: state.textFilterReducer.filters,
    valueFilter: state.valueFilterReducer.filters,
    filtersActive: state.valueFilterReducer.columns,
    data: state.apiServiceReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendFinalFilter: data => dispatch(finalFilter(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
