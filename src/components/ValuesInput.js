import React from "react";
import { connect } from "react-redux";
import { updatingValuesFilter } from "../actions/valuesFilter";

class ValuesInput extends React.Component {
  componentDidMount() {
    const obj = {
      numeric_values: {
        column: this.arrayOfColumns()[0],
        comparison: "Maior",
        value: ""
      }
    };
    this.props.updateValues(obj);
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
      return <option key={each}value={each}>{each}</option>;
    });
  }

  changeStateColumn(event) {
    const {
      numeric_values: { comparison, value }
    } = this.props.filters;
    const obj = {
      numeric_values: {
        column: event.target.value,
        comparison,
        value
      }
    };
    return this.props.updateValues(obj);
  }

  changeStateComparison(event) {
    const {
      numeric_values: { column, value }
    } = this.props.filters;
    const obj = {
      numeric_values: {
        column,
        comparison: event.target.value,
        value
      }
    };
    return this.props.updateValues(obj);
  }

  changeStateValue(event) {
    const {
      numeric_values: { column, comparison }
    } = this.props.filters;
    const obj = {
      numeric_values: {
        column,
        comparison,
        value: event.target.value
      }
    };
    return this.props.updateValues(obj);
  }

  render() {
    return (
      <div>
        <label>
          Choose the column to filter:
          <select onChange={e => this.changeStateColumn(e)} id="column">
            {this.generateColumnOptions()}
          </select>
        </label>
        <select onChange={e => this.changeStateComparison(e)} id="comparison">
          <option value="Maior">Maior que</option>
          <option value="Menor">Menor que</option>
          <option value="Igual">Igual</option>
        </select>
        <input
          onChange={e => this.changeStateValue(e)}
          id="comparisonValue"
          type="number"
          placeholder="Valor"
        />
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
