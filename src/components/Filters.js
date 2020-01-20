import React from 'react';
import { connect } from 'react-redux';
import { finalFilter } from '../actions/filters';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  static findComparisons(valueFilter, data) {
    const { column, comparison, value } = valueFilter;
    switch (comparison) {
      case 'Maior':
        return data.filter(
          (planet) =>
            planet[column] > Number(value) && planet[column] !== 'unknown',
        );
      case 'Menor':
        return data.filter(
          (planet) =>
            planet[column] < Number(value) && planet[column] !== 'unknown',
        );
      case 'Igual':
        return data.filter(
          (planet) => planet[column] === value && planet[column] !== 'unknown',
        );
      default:
        return false;
    }
  }

  filterByValues(data, valueFilter) {
    if (valueFilter) {
      const result = Filters.findComparisons(valueFilter, data);
      return result;
    }
    return data;
  }

  filterByName(data, valueFilter) {
    const { nameFilter } = this.props;
    if (nameFilter) {
      return this.filterByValues(
        data.filter((planet) => planet.name.includes(nameFilter)),
        valueFilter,
      );
    }
    return this.filterByValues(data, valueFilter);
  }

  addFilters(data) {
    const { filtersActive } = this.props;
    if (filtersActive.length > 0) {
      const finalData = filtersActive.reduce((acc, filter, index) => {
        const array = index === 0 ? data : acc;
        return this.filterByName(array, filter);
      }, []);
      this.props.sendFinalFilter(finalData);
    }
    return this.props.sendFinalFilter(this.filterByName(data))
  }

  showFilters() {
    const { filtersActive } = this.props;
    return filtersActive.map((filter) => {
      return (
        <p
          key={filter.column}
        >{`${filter.column} - ${filter.comparison} - ${filter.value}`}</p>
      );
    });
  }

  render() {
    this.addFilters(this.props.initialData.results);
    return (
      <div>
        <p>Filters active:</p>
        <div>{() => this.showFilters()}</div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    sendFinalFilter: (data) => dispatch(finalFilter(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
