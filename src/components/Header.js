import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStarWarsAPI } from '../store/actions/starWarsAPI';

class Header extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <h1>
        StarWars Datatable with Filters
      </h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchStarWarsAPI()),
});

Header.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
