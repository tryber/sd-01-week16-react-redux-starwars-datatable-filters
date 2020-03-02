import React, { Component } from 'react';
import { connect } from 'react-redux';

const filterByNumbers = (planets, column, comparison, value) => {
  const operations = {
    lesserThan: (x, y) => x < y,
    equalsThan: (x, y) => x === y,
    higherThan: (x, y) => x > y,
  };

  const filteredPlanets = planets
    .filter((planet) => operations[comparison](Number(planet[column]), Number(value)));
  // console.log(planets, column, comparison, value)
  return filteredPlanets;
};

const renderColumnsOptions = (selectors) => (
  <>
    {selectors.map(([value, label]) => <option key={`${value}_selector`} value={value}>{label}</option>)}
  </>
);

const renderComparisonOptions = () => (
  <>
    <option label="null" value="" />
    <option value="lesserThan">{'<'}</option>
    <option value="equalsThan">=</option>
    <option value="higherThan">{'>'}</option>
  </>
);

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
    const { dispatch, column, comparison, value, data, selectors } = this.props;
    if (column !== '' && comparison !== '' && value !== '') {
      const filteredPlanets = filterByNumbers(data, column, comparison, value);
      const filterSelectors = selectors.filter((selector) => {
        if (selector[0].includes(column)) return false;
        return true;
      });
      const setNumericFilter = () => (
        { type: FILTER_BY_NUMBERS, filteredPlanets, selectors, filterSelectors }
      );
      return dispatch(setNumericFilter());
    }
    return null;
  }

  render() {
    const { dispatch, column, comparison, value, selectors } = this.props;
    const numberFilterDispatch = (event) => {
      const switcher = {
        fields: () => {
          const { target: { value: column } } = event;
          return { type: STORE_COLUMN_FILTER, column, comparison, value, selectors };
        },
        operator: () => {
          const { target: { value: comparison } } = event;
          return { type: STORE_COMPARISON_FILTER, column, comparison, value, selectors };
        },
        number: () => {
          const { target: { value } } = event;
          return { type: STORE_VALUE_FILTER, column, comparison, value, selectors };
        },
      };
      return switcher[event.target.id]();
    };
    return (
      <div>
        <select onChange={(e) => dispatch(numberFilterDispatch(e))} id="fields">
          {renderColumnsOptions(selectors)}
        </select>
        <select onChange={(e) => dispatch(numberFilterDispatch(e))} id="operator">
          {renderComparisonOptions()}
        </select>
        <input onChange={(e) => dispatch(numberFilterDispatch(e))} type="number" id="number" width="100px" />
      </div>
    );
  }
}

const mapStateToProps = ({ filterByNumericValue, filterByName, planetFetcher }) => {
  const { isFilteredByName } = filterByName;
  const { isFilteredByNumber, filters: { selectors, newSelectors, numeric_values: { column, comparison, value } } } = filterByNumericValue;
  if (isFilteredByName) {
    return {
      isFilteredByNumber,
      newSelectors,
      selectors,
      data: filterByName.data,
      column,
      comparison,
      value,
    };
  }
  return {
    isFilteredByNumber,
    newSelectors,
    selectors,
    data: planetFetcher.data,
    column,
    comparison,
    value,
  };
};

export default connect(mapStateToProps)(FiltersByNumber);
