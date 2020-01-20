import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  filterNumberColumn,
  filterNumberComparison,
  filterNumberValue,
}
  from '../actions/FilterNumber';

class FilterNum extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.filterNum(null, filterNumberColumn);
    this.props.filterNum(null, filterNumberComparison);
    this.props.filterNum(null, filterNumberValue);
  }

  renderInputNumber() {
    if (this.props.column && this.props.column !== 'none' && this.props.comparison && this.props.comparison !== 'none') {
      return (
        <input type="number"
          onChange={(e) => this.props.filterNum(Number(e.target.value), filterNumberValue)}
        />
      );
    }
    this.props.filterNum(null, filterNumberValue);
    return null;
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
    return null;
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.props.filterNum(e.target.value, filterNumberColumn)}>
          <option>none</option>
          {this.props.categorys.map((category) => <option>{category}</option>)}
        </select>
        {this.renderComparisson()}
        {this.renderInputNumber()}
        <button onClick={this.handleOnClick}>X</button>
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
      },
      categorys,
    },
  },
}) => ({
  column,
  comparison,
  categorys,
});

const mapDispatchToProps = (dispatch) => ({
  filterNum: (content, callback) => dispatch(callback(content)),
});

FilterNum.propTypes = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  filterNum: PropTypes.func.isRequired,
  categorys: PropTypes.array.isRequired,
};

FilterNum.defaultProps = {
  column: null,
  comparison: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNum);
