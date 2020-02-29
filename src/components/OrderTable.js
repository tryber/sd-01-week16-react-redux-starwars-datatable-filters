import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newFilters } from '../actions/newFiltersTheAction';

class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = { column: '', order: 'ASC' };
    this.handleColumn = this.handleColumn.bind(this);
    this.creatSelect = this.creatSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendValueForStore = this.sendValueForStore.bind(this);
  }
  static textColumns = [
    'POPULAÇÃO',
    'DURAÇÃO DA ORBITA',
    'DIÂMENTRO',
    'CLIMA',
    'GRAVIDADE',
    'SOLO',
    'DURAÇÃO DA ROTAÇÃO',
    'SUPERFÍCIE DE ÁGUA',
    'FILMES',
    'CRIADO',
    'EDITADO',
    'URL',
  ];

  handleColumn(event) {
    this.setState({ column: event.target.value });
  }
  handleClick(event) {
    this.setState({ order: event.target.value });
  }

  sendValueForStore(event) {
    const { column, order } = this.state;
    const { addPlanetFilters } = this.props;
    addPlanetFilters({ column, order });
    this.setState({
      column: '',
    });
    event.preventDefault();
  }
  creatSelect(list) {
    const { column } = this.state;
    return (
      <select name="column" value={column} onChange={this.handleColumn} required>
        <option value="NOME" selected>
          NOME
        </option>
        {list.map((textName, index) => (
          <option key={`${textName} ${index}`}>{textName}</option>
        ))}
      </select>
    );
  }

  render() {
    const { column } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Escolha para ordenar</legend>
          {this.creatSelect(OrderTable.textColumns)}
          <input
            type="radio"
            name="order"
            value="ASC"
            checked={true}
            onclick={this.handleClick}
          />{' '}
          Ordem Crescente
          <input type="radio" name="order" value="DESC" onclick={this.handleClick} /> Ordem
          Decrescente
          {column && (
            <label>
              <input type="submit" onClick={this.sendValueForStore} />
              Enviar Filtro
            </label>
          )}
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
  sendValueForStore: (value) => dispatch(newFilters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
