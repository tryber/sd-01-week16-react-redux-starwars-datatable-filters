import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPlanets } from '../actions';

class Header extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;

    getPlanets();
  }
  render() {
    return (
    <h1>
        PLANETS OF STAR WARS SHOW
    </h1>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets())
})

export default connect(null, mapDispatchToProps)(Header);
