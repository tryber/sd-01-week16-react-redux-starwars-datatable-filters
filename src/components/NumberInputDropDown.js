import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterNumberDrop } from '../actions/actionNumberFilter';

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
    const state = { ...this.state };
    return state;
  }

  render() {
    const { column, comparison, value } = this.state;
    const { filterNumberDrop } = this.props;
    return (
      <form>
        <fieldset>
          <legend>Campos de Filtro</legend>
          <select name="column" value={column} onChange={this.handleColumn}>
            <option value="">SELECIONE</option>
            <option value="population">POPULAÇÃO</option>
            <option value="orbital_period">DURAÇÃO DA ORBITA</option>
            <option value="diameter">DIÂMENTRO</option>
            <option value="rotation_period">DURAÇÃO DA ROTAÇÃO</option>
            <option value="surface_water">SUPERFÍCIE DE ÁGUA</option>
          </select>
          <select name="comparison" value={comparison} onChange={this.handleComparison}>
            <option value="">SELECIONE</option>
            <option value="bigger">MAIOR QUE</option>
            <option value="smaller">MENOR QUE</option>
            <option value="equal">IGUAL Á</option>
          </select>
          <input
            type="number"
            value={value}
            placeholder="Valor numérico"
            onChange={this.handleInput}
          />
          <button type="button" onClick={() => filterNumberDrop(column, comparison, value)}>
            Enviar Filtro
          </button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  valueOfState: filters
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ filterNumberDrop }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NumberInputDropDown);
