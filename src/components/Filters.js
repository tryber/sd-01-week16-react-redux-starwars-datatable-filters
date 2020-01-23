import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import finalFilter from '../actions/filters';
import removeValuesFilter from '../actions/valueFilterRemove';

class Filters extends React.Component {
  static findComparisons(valueFilter, data) {
    const { column, comparison, value } = valueFilter;
    switch (comparison) {
      case 'Maior':
        return data.filter(
          (planet) => planet[column] > Number(value) && planet[column] !== 'unknown',
        );
      case 'Menor':
        return data.filter(
          (planet) => planet[column] < Number(value) && planet[column] !== 'unknown',
        );
      case 'Igual':
        return data.filter((planet) => planet[column] === value && planet[column] !== 'unknown');
      default:
        return false;
    }
  }

  static filterByValues(data, valueFilter) {
    if (valueFilter) {
      const result = Filters.findComparisons(valueFilter, data);
      return result;
    }
    return data;
  }

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  filterByName(data, valueFilter) {
    const { nameFilter } = this.props;
    if (nameFilter) {
      return Filters.filterByValues(
        data.filter((planet) => planet.name.includes(nameFilter)),
        valueFilter,
      );
    }
    return Filters.filterByValues(data, valueFilter);
  }

  removeFilter(filter) {
    const actualFilter = this.props.filtersActive;
    const newFilters = actualFilter.filter((filt) => filt.column !== filter.column);
    this.props.removeFilters(newFilters);
    this.showFilters(this.props.initialData.results, newFilters);
  }

  showFilters(data, filtersActive) {
    if (filtersActive.length > 0) {
      const finalData = filtersActive.reduce((acc, filter, index) => {
        const array = index === 0 ? data : acc;
        return this.filterByName(array, filter);
      }, []);
      this.props.sendFinalFilter(finalData);
      return filtersActive.map((filter) => (
        <div>
          <p key={filter.column}>{`${filter.column} - ${filter.comparison} - ${filter.value}`}</p>
          <button type="button" onClick={() => this.removeFilter(filter)}>X</button>
        </div>
      ));
    }
    this.props.sendFinalFilter(this.filterByName(data));
    return 'no filter';
  }

  render() {
    return (
      <div>
        <p>Filters active:</p>
        <div>{this.showFilters(this.props.initialData.results, this.props.filtersActive)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nameFilter: state.textFilterReducer.filters,
  filtersActive: state.valueFilterReducer.columns,
  initialData: state.apiServiceReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  sendFinalFilter: (data) => dispatch(finalFilter(data)),
  removeFilters: (columns) => dispatch(removeValuesFilter(columns)),
});

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  filtersActive: PropTypes.arrayOf.isRequired,
  initialData: PropTypes.shape({
    count: PropTypes.number.isRequired,
    results: PropTypes.arrayOf.isRequired,
  }).isRequired,
  sendFinalFilter: PropTypes.func.isRequired,
  removeFilters: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
