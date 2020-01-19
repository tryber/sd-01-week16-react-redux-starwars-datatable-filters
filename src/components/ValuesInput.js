import React from "react";
import { connect } from "react-redux";
import { updatingValuesFilter } from "../actions/valuesFilter";

class ValuesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: this.arrayOfColumns()[0],
      comparison: "Maior",
      value: ""
    };
  }

  arrayOfColumns() {
    return [
      "population",
      "orbital_period",
      "diameter",
      "rotation_period",
      "surface_water"
    ];
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
    this.props.updateValues(obj);
  }

  changeState(event, id) {
    this.setState({
      [id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        Choose the column to filter:
        <label>
          <select onChange={e => this.changeState(e, "column")} id="column">
            {this.generateColumnOptions()}
          </select>
        </label>
        <select
          onChange={e => this.changeState(e, "comparison")}
          id="comparison"
        >
          <option value="Maior">Maior que</option>
          <option value="Menor">Menor que</option>
          <option value="Igual">Igual</option>
        </select>
        <input
          onChange={e => this.changeState(e, "value")}
          id="comparisonValue"
          type="number"
          placeholder="Valor"
        />
        <button onClick={() => this.updateStore(this.state)}>
          Adicionar filtro
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.valueFilterReducer.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateValues: obj => dispatch(updatingValuesFilter(obj))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ValuesInput);
