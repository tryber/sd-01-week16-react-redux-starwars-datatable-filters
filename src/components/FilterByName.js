import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetName } from '../actions';

class FilterByName extends Component {
  render() {
    const { filterName } = this.props;
    return (
      <div>
        <input type="text" onChange={(e) => filterName(e.target.value)} />
      </div>
    );
  }
}

FilterByName.propTypes = {
  filterName: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filterName: { filters } }) => ({ filters });

const mapDispatchToProps = (dispatch) => ({
  filterName: (value) => dispatch(filterPlanetName(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByName);
