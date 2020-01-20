import React, { Component } from 'react';
import { connect } from 'react-redux';
import filterText from '../actions/FilterText';
import FilterNum from './FilterNum';

class Filter extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.props.filterText(e.target.value)}>
        </input>
        <FilterNum />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterText: (text) => dispatch(filterText(text)),
});

export default connect(null, mapDispatchToProps)(Filter);
