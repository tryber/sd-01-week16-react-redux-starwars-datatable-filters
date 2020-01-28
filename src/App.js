import React, { Component } from 'react';

import { connect } from 'react-redux';

import FilterText from './components/FilterText';
import FilterNum from './components/FilterNum';
import TableContainer from './components/Table';
import DisplayFilterNum from './components/DisplayFilterNum';
import fetchPlanets from './actions/database';
import ShortTable from './components/ShortTable';

import './App.css';


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
        <TableContainer />
      </div>  
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(null, mapDispatchToProps)(App);
