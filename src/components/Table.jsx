import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPlanets from '../actions/APIFetching';

class Table extends Component {

  componentDidMount() {
    this.props.getPlanets();
  }
  
  render() {
    return (
      <table>
      </table>
    );
  }
}

const mapStateToProps = ({
  planetsData: {
    error,
    isFetching,
    planets,
  },
}) => (
    {
      error,
      isFetching,
      planets,
    }
  );

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
