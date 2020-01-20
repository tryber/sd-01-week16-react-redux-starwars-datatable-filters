import React from 'react';
import { connect } from 'react-redux';
import { updatingValuesFilter } from '../actions/valuesFilter';

class ValuesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: ''
    };
  }

  arrayOfColumns() {
    const completeColumns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'
    ];
    if (this.props.columns.length > 0) {
      const arrayOfUsedColumns = this.props.columns.map(
        column => column.column
      );
      const arrayOfColumnsToUse = completeColumns.filter(
        column => !arrayOfUsedColumns.includes(column)
      );
      return arrayOfColumnsToUse;
    }
    return completeColumns;
  }

  generateColumnOptions() {
    return this.arrayOfColumns().map(each => {
      return (
        <option key={each} value={each}>
          {each}
        </option>
      );
    });
  }

  updateStore(state) {
    const { column, comparison, value } = state;
    const obj = {
      numeric_values: {
        column,
        comparison,
        value
      }
    };
    const formatFilter = { column, comparison, value };
    const newFilter = [...this.props.columns, formatFilter];
    if (column === '' || comparison === '' || value === '') {
      return alert('dados não preenchidos');
    }
    this.setState({ column: '' });
    return this.props.updateValues(obj, newFilter);
  }

  changeState(event, id) {
    this.setState({
      [id]: event.target.value
    });
  }

  generateValuesInput() {
    return (
      <div>
        <label>
          <select onChange={e => this.changeState(e, 'column')} id='column'>
            {this.generateColumnOptions()}
          </select>
        </label>
        <select
          onChange={e => this.changeState(e, 'comparison')}
          id='comparison'
        >
          <option></option>
          <option value='Maior'>Maior que</option>
          <option value='Menor'>Menor que</option>
          <option value='Igual'>Igual</option>
        </select>
        <input
          onChange={e => this.changeState(e, 'value')}
          id='comparisonValue'
          type='number'
          placeholder='Valor'
        />
        <button onClick={() => this.updateStore(this.state)}>
          Adicionar filtro
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        Choose the column to filter:
        <div>{this.generateValuesInput()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.valueFilterReducer.filters,
    columns: state.valueFilterReducer.columns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateValues: (obj, columns) => dispatch(updatingValuesFilter(obj, columns))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ValuesInput);
