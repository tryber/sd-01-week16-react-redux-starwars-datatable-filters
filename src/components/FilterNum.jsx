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
    if (this.props.column && this.props.column !== 'none' && this.props.comparison && this.props.comparison !== 'none') {
      return (
        <input type="number" onChange={(e) => this.props.filterNum(e.target.value, filterNumberValue)}>
        </input>
      );
    }
    this.props.filterNum(null, filterNumberValue);
  }

  renderComparisson() {
    if (this.props.column && this.props.column !== 'none') {
      return (
        <select onChange={(e) => this.props.filterNum(e.target.value, filterNumberComparison)}>
          <option>none</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      );
    }
    this.props.filterNum(null, filterNumberComparison);
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.props.filterNum(e.target.value, filterNumberColumn)}>
          <option>none</option>
          {this.props.categorys.map(category => <option>{category}</option>)}
        </select>
        {this.renderComparisson()}
        {this.renderInputNumber()}
        <button onClick={() => {
          this.props.filterNum(null, filterNumberColumn);
          this.props.filterNum(null, filterNumberComparison);
          this.props.filterNum(null, filterNumberValue);
        }}>X</button>
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
      },
      categorys,
    }
  }
}) => (
    {
      column,
      comparison,
      value,
      categorys,
    }
  );

const mapDispatchToProps = (dispatch) => ({
  filterNum: (content, callback) => dispatch(callback(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNum);