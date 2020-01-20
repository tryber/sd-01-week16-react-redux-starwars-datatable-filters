import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receivePlanets } from '../actions';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;

    getPlanets();
  }

  render() {
    const { data } = this.props;
    return (
      data.map((planet) => <div>{planet.name}</div>)
    );
  }
}

Table.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  data: PropTypes.shape([]),
};

Table.defaultProps = {
  data: PropTypes.shape([]),
};

const mapStateToProps = ({
  planets: {
    data,
  },
}) => ({
  data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(receivePlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
