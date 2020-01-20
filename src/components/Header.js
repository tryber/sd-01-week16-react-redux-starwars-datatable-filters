import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        PLANETAS DO STAR WARS SHOW
      </h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

Header.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
