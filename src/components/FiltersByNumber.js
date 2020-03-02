import React, { Component } from 'react';
import { connect } from 'react-redux';

const filterByNumbers = (planets, column, comparison, value) => {
  const operations = {
    lesserThan: (x, y) => x < y,
    equalsThan: (x, y) => x === y,
    higherThan: (x, y) => x > y,
  };

  const filteredPlanets = planets
    .filter((planet) => operations[comparison](Number(planet[column]), value));
  return filteredPlanets;
};

const STORE_COLUMN_FILTER = 'STORE_COLUMN_FILTER';
const STORE_COMPARISON_FILTER = 'STORE_COMPARISON_FILTER';
const STORE_VALUE_FILTER = 'STORE_VALUE_FILTER';
const FILTER_BY_NUMBERS = 'FILTER_BY_NUMBER';

class FiltersByNumber extends Component {
  componentDidUpdate() {
    const debounce = setTimeout(() => {
      this.dispatchFilters();
      clearTimeout(debounce);
    }, 800);
  }

  dispatchFilters() {
    const { dispatch, column, comparison, value, data } = this.props;
    const setNumericFilter = (filteredPlanets) => (
      { type: FILTER_BY_NUMBERS, filteredPlanets }
    );

    if (column !== '' && comparison !== '' && value !== '') {
      const filteredPlanets = filterByNumbers(data, column, comparison, value);
      return dispatch(setNumericFilter(filteredPlanets));
    }
    return null;
  }

  render() {
    const { dispatch, column, comparison, value, data } = this.props;
    const numberFilterDispatch = (event) => {
      const switcher = {
        fields: () => {
          const { target: { value: column } } = event;
          return { type: STORE_COLUMN_FILTER, column, comparison, value };
        },

        operator: () => {
          const { target: { value: comparison } } = event;
          return { type: STORE_COMPARISON_FILTER, column, comparison, value };
        },

        number: () => {
          const { target: { value } } = event;
          return { type: STORE_VALUE_FILTER, column, comparison, value };
        },
      };

      return switcher[event.target.id]();
    };


    return (
      <div>
        <select onChange={(e) => dispatch(numberFilterDispatch(e))} id="fields">
          <option label="null" value="" />
          <option value="population">Population</option>
          <option value="orbital_period">Orbital period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation period</option>
          <option value="surface_water">Surface water</option>
        </select>
        <select onChange={(e) => dispatch(numberFilterDispatch(e))} id="operator">
          <option label="null" value="" />
          <option value="lesserThan">{'<'}</option>
          <option value="equalsThan">=</option>
          <option value="higherThan">{'>'}</option>
        </select>
        <input onChange={(e) => dispatch(numberFilterDispatch(e))} type="number" id="number" width="100px" />
      </div>
    );
  }
}

const mapStateToProps = ({ filterByNumericValue, filterByName, planetFetcher }) => {
  const { isFilteredByName } = filterByName;
  const { filters: { numeric_values: { column, comparison, value } } } = filterByNumericValue;
  if (isFilteredByName) {
    return {
      data: filterByName.data,
      column,
      comparison,
      value,
    };
  }
  return {
    data: planetFetcher.data,
    column,
    comparison,
    value,
  };
};

export default connect(mapStateToProps)(FiltersByNumber);
