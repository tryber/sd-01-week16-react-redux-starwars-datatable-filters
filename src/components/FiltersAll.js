import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterNumber } from '../store/actions/filterNumber';
import FilterSelect from './FilterSelect';
import FilterCompare from './FilterCompare';
import FilterValue from './FilterValue';
import FiltersActives from './FiltersActives';

class FilterAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.filterColumn = this.filterColumn.bind(this);
    this.filterCompare = this.filterCompare.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.sendValues = this.sendValues.bind(this);
  }

  filterColumn(value) {
    this.setState({
      column: value,
    });
  }

  filterCompare(value) {
    this.setState({
      comparison: value,
    });
  }

  filterValue(value) {
    this.setState({
      value,
    });
  }

  sendValues() {
    const { column, comparison, value } = this.state;
    const { addPlanetFilters } = this.props;
    addPlanetFilters({ column, comparison, value });
    this.setState({
      column: '',
    });
  }

  render() {
    const { column, comparison, value } = this.state;
    return (
      <div>
        <FiltersActives />
        <FilterSelect handleChange={this.filterColumn} />
        <FilterCompare handleChange={this.filterCompare} />
        <FilterValue handleChange={this.filterValue} />
        {column && comparison && value
        && <button type="button" onClick={() => this.sendValues()}>Adicionar Filtro</button>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPlanetFilters: (value) => dispatch(filterNumber(value)),
});

FilterAll.propTypes = {
  addPlanetFilters: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterAll);
