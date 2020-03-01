import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newFilters } from '../actions/newFiltersTheAction';

const textColumns = [
  'population',
  'rotation_period',
  'diameter',
  'orbital_period',
  'surface_water',
];
class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = { column: 'name', order: 'ASC' };
    this.handleColumn = this.handleColumn.bind(this);
    this.creatSelect = this.creatSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendValueForStore = this.sendValueForStore.bind(this);
  }

  handleColumn(event) {
    this.setState({ column: event.target.value });
  }
  handleClick(event) {
    this.setState({ order: event.target.value });
  }

  sendValueForStore(event) {
    event.preventDefault();
    const { column, order } = this.state;
    const { addPlanetFilters } = this.props;
    addPlanetFilters({ column, order });
  }
  
  creatSelect(list) {
    const { column } = this.state;
    return (
      <select name="column" value={column} onChange={this.handleColumn}>
        <option value="name" selected>
          name
        </option>
        {list.map((textName) => (
          <option key={`${textName}`}>{textName}</option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Escolha para ordenar</legend>
          {this.creatSelect(textColumns)}
          <label onChange={this.handleClick} htmlFor="order" >
            <input type="radio" name="order" value="ASC" defaultChecked /> Ordem Crescente
            <input type="radio" name="order" value="DESC" /> Ordem Decrescente
          </label>
          {
            <label htmlFor="input">
              <input type="submit" onClick={this.sendValueForStore} id="input" />
              Enviar Filtro
            </label>
          }
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = ({ filtersOrder: { column, order } }) => ({
  column,
  order,
});

const mapDispatchToProps = (dispatch) => ({
  addPlanetFilters: (value) => dispatch(newFilters(value)),
});

OrderTable.propTypes = {
  addPlanetFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
