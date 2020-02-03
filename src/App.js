import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

import FilterText from './components/FilterText';
import FilterNum from './components/FilterNum';
import Table from './components/Table';
import DisplayFilterNum from './components/DisplayFilterNum';
import ShortTable from './components/ShortTable';

import fetchPlanets from './actions/database';


class App extends Component {

  componentDidMount() {
    this.props.getPlanets();
  }

  render() {
    return (
      <div>
        <FilterText />
        <ShortTable />
        <DisplayFilterNum />
        <FilterNum />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
