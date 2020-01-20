import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import finalFilter from '../actions/filters';

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

  showFilters(data) {
    const { filtersActive } = this.props;
    if (filtersActive.length > 0) {
      const finalData = filtersActive.reduce((acc, filter, index) => {
        const array = index === 0 ? data : acc;
        return this.filterByName(array, filter);
      }, []);
      this.props.sendFinalFilter(finalData);
      return filtersActive.map((filter) => (
        <p key={filter.column}>{`${filter.column} - ${filter.comparison} - ${filter.value}`}</p>
      ));
    }
    this.filterByName(data);
    return 'no filter';
  }

  render() {
    return (
      <div>
        <p>Filters active:</p>
        <div>{this.showFilters(this.props.initialData.results)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nameFilter: state.textFilterReducer.filters,
  valueFilter: state.valueFilterReducer.filters,
  filtersActive: state.valueFilterReducer.columns,
  initialData: state.apiServiceReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  sendFinalFilter: (data) => dispatch(finalFilter(data)),
});

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  valueFilter: PropTypes.shape({
    numeric_values: PropTypes.shape({
      column: PropTypes.string,
    }),
  }).isRequired,
  filtersActive: PropTypes.arrayOf.isRequired,
  initialData: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
