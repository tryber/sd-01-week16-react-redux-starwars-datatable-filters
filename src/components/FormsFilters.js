import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFilters } from '../actions/filtersUpdate';

class FormsFilters extends Component {
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
    const selectIsTrueOrFalse = (value) => {
      const exists = numeric_values.find((filterObj) => filterObj.column === value);
      if (exists) return false;
      return true;
    };
    return (
      <form>
        <fieldset>
          <legend>Campos de Filtro</legend>
          <select name="column" value={column} onChange={this.handleColumn} required>
            <option value="" disabled>
              Selecionar Opção
            </option>
            {selectIsTrueOrFalse('population') && (
              <option value="population">População</option>
            )}
            {selectIsTrueOrFalse('orbital_period') && (
              <option value="orbital_period">Duração Orbital</option>
            )}
            {selectIsTrueOrFalse('diameter') && (
              <option value="diameter">Diâmetro</option>
            )}
            {selectIsTrueOrFalse('rotation_period') && (
              <option value="rotation_period">Duração da Rotação</option>
            )}
            {selectIsTrueOrFalse('surface_water') && (
              <option value="surface_water">Superfície da Água</option>
            )}
          </select>
          <select name="comparison" value={comparison} onChange={this.handleComparison} required>
            <option value="" disabled>
              SELECIONE
            </option>
            <option value="bigger">MAIOR QUE</option>
            <option value="smaller">MENOR QUE</option>
            <option value="equal">IGUAL Á</option>
          </select>
          <input
            type="number"
            value={value}
            placeholder="Valor numérico"
            onChange={this.handleInput}
            required
          />
          {column && comparison && value && (
            <button type="submit" onClick={() => this.sendValueForStore()}>
              Filtrar
            </button>
          )}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = ({ filtersForm: { numeric_values } }) => ({
  numeric_values,
});

const mapDispatchToProps = (dispatch) => ({
  addPlanetFilters: (value) => dispatch(addFilters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsFilters);
