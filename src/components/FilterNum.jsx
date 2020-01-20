import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  filterNumberColumn,
  filterNumberComparison,
  filterNumberValue,
}
  from '../actions/FilterNumber';

class FilterNum extends Component {
  renderInputNumber() {
    if (this.props.comparison && this.props.comparison !== 'none') return (
      <input type="number" onChange={(e) => this.props.filterNum(e.target.value, filterNumberValue)}>
      </input>
    );
  }

  renderComparisson() {
    if (this.props.column && this.props.column !== 'none') return (
      <select onChange={(e) => this.props.filterNum(e.target.value, filterNumberComparison)}>
        <option>none</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    );
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.props.filterNum(e.target.value, filterNumberColumn)}>
          <option>none</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        {this.renderComparisson()}
        {this.renderInputNumber()}
      </div>
    );
  }
}

const mapStateToProps = ({
  filterPlanets: {
    filters: {
      numericValues: {
        column,
        comparison,
        value,
      } }
  }
}) => (
    {
      column,
      comparison,
      value,
    }
  );

const mapDispatchToProps = (dispatch) => ({
  filterNum: (content, callback) => dispatch(callback(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNum);