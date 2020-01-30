import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  planetFilterName,
  addFilters,
} from '../actions';
import ActiveFilters from './ActiveFilters';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.filterColumn = this.filterColumn.bind(this);
    this.filterComparison = this.filterComparison.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.sendValues = this.sendValues.bind(this);
  }

  filterColumn(value) {
    this.setState({
      column: value,
    });
  }

  filterComparison(value) {
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
  }

  render() {
    const { filterName } = this.props;
    return (
      <div>
        <ActiveFilters />
        <div className="filters">
          <input type="text" placeholder="Filtrar pelo Nome" onChange={(e) => filterName(e.target.value)} />
          Filtrar por Valores Numéricos
          <div className="filter-planets">
            <select name="column" onChange={(e) => this.filterColumn(e.target.value)}>
              <option value="">Selecionar Opção</option>
              <option value="population">População</option>
              <option value="orbital_period">Duração Orbital</option>
              <option value="diameter">Diâmetro</option>
              <option value="rotation_period">Duração da Rotação</option>
              <option value="surface_water">Superfície da Água</option>
            </select>
            <select name="type" onChange={(e) => this.filterComparison(e.target.value)}>
              <option value="">Selecionar Opção</option>
              <option value="bigger">Maior que</option>
              <option value="less">Menor que</option>
              <option value="equal">Igual a</option>
            </select>
            <input type="number" placeholder="Filtrar por Valor" onChange={(e) => this.filterValue(e.target.value)} />
            <button type="button" onClick={() => this.sendValues()}>Adicionar Filtro</button>
          </div>
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
