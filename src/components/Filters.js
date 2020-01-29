import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  planetFilterName,
  addFilters,
} from '../actions';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  changeFilterColumn(value) {
    this.setState({
      column: value,
    });
  }

  changeFilterComparison(value) {
    this.setState({
      comparison: value,
    });
  }

  changeFilterValue(value) {
    this.setState({
      value,
    });
  }

  sendValues() {
    const { column, comparison, value } = this.state;
    const { addPlanetFilters } = this.props;
    addPlanetFilters({ column, comparison, value });
  }

  render() {
    const { filterName } = this.props;
    return (
      <div>
        <input type="text" placeholder="Filtrar pelo Nome" onChange={(e) => filterName(e.target.value)} />
        <div>
          <select name="column" onChange={(e) => this.changeFilterColumn(e.target.value)}>
            <option value="">Select Option</option>
            <option value="population">Population</option>
            <option value="orbital_period">Orbital Period</option>
            <option value="diameter">Diameter</option>
            <option value="rotation_period">Rotation Period</option>
            <option value="surface_water">Surface Water</option>
          </select>
          <select name="type" onChange={(e) => this.changeFilterComparison(e.target.value)}>
            <option value="">Select Option</option>
            <option value="bigger">Maior que</option>
            <option value="less">Menor que</option>
            <option value="equal">Igual a</option>
          </select>
          <input type="number" placeholder="Filtrar por Valor" onChange={(e) => this.changeFilterValue(e.target.value)} />
          <button type="button" onClick={() => this.sendValues()}>Adicionar Filtro</button>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.func.isRequired,
  addPlanetFilters: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  filterName: (value) => dispatch(planetFilterName(value)),
  addPlanetFilters: (value) => dispatch(addFilters(value)),
});

export default connect(null, mapDispatchToProps)(Filters);
