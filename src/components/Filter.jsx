import React, { Component } from 'react';
import { connect } from 'react-redux';
import filterPlanets from '../actions/FilterContent';

class Filter extends Component {
  render() {
    return (
      <input type="text" onChange={(e) => this.props.filter(e.target.value)}>
      </input>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (text) => dispatch(filterPlanets(text)),
});

export default connect(null, mapDispatchToProps)(Filter);
