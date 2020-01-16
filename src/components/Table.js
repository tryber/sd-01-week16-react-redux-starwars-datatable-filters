import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPlanets } from '../actions';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;

    getPlanets();
  }

  render() {
    const { planets } = this.props;
    console.log(planets)
    return (
    <div>
        StarWARS
    </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets())
})

const mapStateToProps = ({
  planets,
}) => (
    {
      planets,
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Table);
