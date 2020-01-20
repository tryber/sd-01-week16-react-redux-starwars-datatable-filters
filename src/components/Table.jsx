import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPlanets from '../actions/APIFetching';

class Table extends Component {

  componentDidMount() {
    this.props.getPlanets();
  }

  renderContent() {
    const { data } = this.props;
    return (
      <table>
        <tr>
          <th>name</th>
          <th>terrain</th>
          <th>climate</th>
          <th>gravity</th>
          <th>population</th>
          <th>diameter</th>
          <th>orbital period</th>
          <th>rotation period</th>
          <th>surface water</th>
        </tr>
        {data.results.map(planet => {
          const { name, diameter, rotation_period,
            orbital_period, gravity, population,
            climate, terrain, surface_water,
          } = planet;
          return (
            <tr>
              <td>{name}</td>
              <td>{terrain}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{population}</td>
              <td>{diameter}</td>
              <td>{orbital_period}</td>
              <td>{rotation_period}</td>
              <td>{surface_water}</td>
            </tr>
          )
        })}
      </table>
    );
  }


  render() {
    const { data, isFetching } = this.props;
    return (
      <div>
        {isFetching && <p> Loading... </p>}
        {!isFetching && data && this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({
  planetsData: {
    error,
    isFetching,
    data,
  },
  filterPlanets : {
    filter,
  }
}) => (
    {
      error,
      isFetching,
      data,
      filter,
    }
  );

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Table);
