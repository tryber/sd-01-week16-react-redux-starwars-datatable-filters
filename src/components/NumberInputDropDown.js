import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFilters } from '../actions/actionNumberFilter';

class NumberInputDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleColumn = this.handleColumn.bind(this);
    this.handleComparison = this.handleComparison.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.sendValueForStore = this.sendValueForStore.bind(this);
  }

  handleColumn(event) {
    this.setState({ column: event.target.value });
  }

  handleComparison(event) {
    this.setState({ comparison: event.target.value });
  }

  handleInput(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }

  sendValueForStore() {
    const { column, comparison, value } = this.state;
    const { addPlanetFilters } = this.props;
    addPlanetFilters({ column, comparison, value });
    this.setState({
      column: '',
    });
  }

  render() {
    const { column, comparison, value } = this.state;
    const { numeric_values } = this.props;

    const selectIsTrueOrFalse = (filters, value) => {
      const exists = filters.numeric_values.find((filterObj) => filterObj.column === value);
      if (exists) return false;
      return true;
    };
    return (
      <form>
        <fieldset>
          <legend>Campos de Filtro</legend>
          <select name="column" value={column} onChange={this.handleColumn} required>
            <option value="" disabled> Selecionar Opção </option>
            {selectIsTrueOrFalse(numeric_values, 'population') && (
              <option value="population">População</option> )}
            {selectIsTrueOrFalse(numeric_values, 'orbital_period') && (
              <option value="orbital_period">Duração Orbital</option> )}
            {selectIsTrueOrFalse(numeric_values, 'diameter') && (
              <option value="diameter">Diâmetro</option> )}
            {selectIsTrueOrFalse(numeric_values, 'rotation_period') && (
              <option value="rotation_period">Duração da Rotação</option> )}
            {selectIsTrueOrFalse(numeric_values, 'surface_water') && (
              <option value="surface_water">Superfície da Água</option> )}
          </select>
          <select name="comparison" value={comparison} onChange={this.handleComparison} required>
            <option value="" disabled> SELECIONE </option>
            <option value="bigger">MAIOR QUE</option>
            <option value="smaller">MENOR QUE</option>
            <option value="equal">IGUAL Á</option>
          </select>
          <input type="number" value={value} placeholder="Valor numérico" onChange={this.handleInput} />
          {column && comparison && value && (
            <button type="submit" onClick={() => this.sendValueForStore()}> Enviar Filtro </button> )}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  numeric_values: filters,
});

const mapDispatchToProps = (dispatch) => ({
  addPlanetFilters: (value) => dispatch(addFilters(value)),
});

NumberInputDropDown.propTypes = {
  addPlanetFilters: PropTypes.func.isRequired,
  numeric_values: PropTypes.arrayOf(PropTypes.shape({})),
};

NumberInputDropDown.defaultProps = {
  numeric_values: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberInputDropDown);
