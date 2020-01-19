import React from "react";
import { connect } from "react-redux";
import { loadData } from "../actions/starWarsApi";
import "./table.css";

class Table extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  filterByName(data, nameFilter) {
    if (nameFilter) {
      return this.filterByValues(
        data.filter(planet => planet.name.includes(nameFilter))
      );
    }
    return this.filterByValues(data);
  }

  findComparisons({ column, comparison, value }, data) {
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
    if (
      valueFilter.numeric_values &&
      valueFilter.numeric_values.value.length > 0
    ) {
      const result = this.findComparisons(valueFilter.numeric_values, data);
      return this.generateTableHead(result);
    }
    return this.generateTableHead(data);
  }

  generateTableHead(data) {
    if (data.length > 0) {
      const arrayOfTags = Object.entries(data[0])
        .map(tag => tag[0])
        .filter(name => name !== "residents");
      return (
        <table>
          <thead>
            <tr>
              {arrayOfTags.map(tag => {
                return <th key={`${tag}1`}>{tag}</th>;
              })}
            </tr>
          </thead>
          <tbody>{this.generateTableBody(data, arrayOfTags)}</tbody>
        </table>
      );
    } else {
      return <p>Planeta não encontrado</p>;
    }
  }

  generateTableBody(data, arrayOfTags) {
    return data.map(planet => {
      return (
        <tr key={planet.diameter}>
          {arrayOfTags.map(tag => {
            return <td key={tag}>{planet[tag]}</td>;
          })}
        </tr>
      );
    });
  }

  render() {
    if (this.props.isFetching) {
      return <p>LOADING...</p>;
    }
    if (this.props.sucess) {
      return this.filterByName(this.props.data.results, this.props.nameFilter);
    }
    return <div>teste</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.apiServiceReducer.data,
    isFetching: state.apiServiceReducer.isFetching,
    sucess: state.apiServiceReducer.sucess,
    nameFilter: state.textFilterReducer.filters,
    valueFilter: state.valueFilterReducer.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
