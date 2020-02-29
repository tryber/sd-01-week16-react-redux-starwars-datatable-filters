import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilterName from './FilterName';
import ButtonSort from './ButtonSort';

class Table extends Component {
  constructor(props) {
    super(props);
    this.filterNumericNumber = this.filterNumericNumber.bind(this);
    this.changeColumnOrder = this.changeColumnOrder.bind(this);
    this.sortAscending = this.sortAscending.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
    this.tableStarWars = this.tableStarWars.bind(this);
  }

  filterPlanetByName(data, textInput) {
    if (textInput) {
      return data.filter(({ name }) => name.toLowerCase().includes(textInput.toLowerCase()));
    }
    return data;
  };

  tableStarWars(data) {
    if (!data) return <div>Loading...</div>;
    return (
      <tbody>
        <tr className="title">
          <td>Planet Name</td>
          <td>rotation_period</td>
          <td>orbital_period</td>
          <td>diameter</td>
          <td>climate</td>
          <td>gravity</td>
          <td>terrain</td>
          <td>surface_water</td>
          <td>population</td>
          <td>films</td>
          <td>created</td>
          <td>edited</td>
          <td>url</td>
        </tr>
        {data.map((planets) => (
          <tr key={`Planeta: ${planets.name}`}>
            <td key={planets.name}>{planets.name}</td>
            <td key={planets.rotation_period}>{planets.rotation_period}</td>
            <td key={planets.orbital_period}>{planets.orbital_period}</td>
            <td key={planets.diameter}>{planets.diameter}</td>
            <td key={planets.climate}>{planets.climate}</td>
            <td key={planets.gravity}>{planets.gravity}</td>
            <td key={planets.terrain}>{planets.terrain}</td>
            <td key={planets.surface_water}>{planets.surface_water}</td>
            <td key={planets.population}>{planets.population}</td>
            <td key={planets.films}>{planets.films.map((films) => <p key={films}>{films}</p>)}</td>
            <td key={planets.created}>{planets.created}</td>
            <td key={planets.edited}>{planets.edited}</td>
            <td key={planets.url}>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  static comparisonCase(filters, data) {
    return filters.reduce((previousList, filter, index) => {
      const planetList = (index === 0) ? data : previousList;
      const obj = {
        bigger: planetList.filter((planet) => Number(planet[filter.column]) > filter.value),
        less: planetList.filter((planet) => Number(planet[filter.column]) < filter.value),
        equal: planetList.filter((planet) => planet[filter.column] === filter.value),
      };
      return obj[filter.comparison];
    }, []);
  }

  sortAscending(planetsData, isNumeric) {
    const { sortTable: { column } } = this.props;
    if (!isNumeric) {
      return planetsData.sort((a, b) => {
        if (a[column] > b[column]) return 1;
        if (b[column] > a[column]) return -1;
        return 0;
      });
    }
    return planetsData.sort((a, b) => {
      if (a[column] === 'unknown') return 1;
      if (b[column] === 'unknown') return -1;
      return Number(a[column]) - Number(b[column]);
    });
  }

  sortDescending(planetsData, isNumeric) {
    const { sortTable: { column } } = this.props;
    if (!isNumeric) {
      return planetsData.sort((a, b) => {
        if (a[column] > b[column]) return -1;
        if (b[column] > a[column]) return 1;
        return 0;
      });
    }
    return planetsData.sort((a, b) => {
      if (a[column] === 'unknown') return -1;
      if (b[column] === 'unknown') return 1;
      return Number(b[column]) - Number(a[column]);
    });
  }

  changeColumnOrder(planetsData) {
    const { sortTable: { column, order } } = this.props;
    const numericColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const isNumeric = numericColumns.includes(column);

    if (!column) return planetsData;

    if (order === 'ASC') return this.sortAscending(planetsData, isNumeric);
    return this.sortDescending(planetsData, isNumeric);
  }

  filterNumericNumber(planetsData) {
    const { numeric_values } = this.props;
    if (numeric_values.length !== 0) {
      return Table.comparisonCase(numeric_values, planetsData);
    }
    return planetsData;
  }

  render() {
    const { data, name } = this.props;
    const planetsFiltered = name ? this.filterPlanetByName(data, name) : data;
    if (planetsFiltered.length === 0) {
      return <div>Loading</div>
    } else {
      const filterNumber = this.filterNumericNumber(planetsFiltered)
      const sortedPlanets = filterNumber ? this.changeColumnOrder(filterNumber) : this.changeColumnOrder(planetsFiltered);
      return (
        <section>
          <FilterName />
          <table>
            <ButtonSort />
            {data && this.tableStarWars(sortedPlanets)}
          </table>
        </section>
      );
    }
  }
}

const mapStateToProps = ({ data: { data }, filters: { name, numeric_values }, sort: { sortTable } }) => ({
  data,
  name,
  sortTable,
  numeric_values,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  name: PropTypes.string,
};

Table.defaultProps = {
  data: [],
  name: '',
};

export default connect(mapStateToProps)(Table);
