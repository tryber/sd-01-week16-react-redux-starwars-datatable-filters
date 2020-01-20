import React, { Component } from 'react';
import { connect } from 'react-redux';
import filterText from '../actions/FilterText';
import FilterNum from './FilterNum';

class Filter extends Component {

  render() {
    const { categorys, value, column, comparison } = this.props;
    return (
      <div>
        <input type="text" onChange={(e) => this.props.filterText(e.target.value)}>
        </input>
        <FilterNum />
      </div>
    );
  }
}

const mapStateToProps = ({
  filterPlanets: {
    filters: { numericValues: {
      column,
      comparison,
      value,
    },
      categorys,
    }
  }
}) => (
    {
      categorys,
      value,
      column,
      comparison,
    }
  );

const mapDispatchToProps = (dispatch) => ({
  filterText: (text) => dispatch(filterText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
