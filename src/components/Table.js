import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';

function createRows(planet) {
  return (
    <tr key={planet.name}>
      <td>{`${planet.name}`}</td>
      <td>{`${planet.population}`}</td>
      <td>{`${planet.orbital_period} Hours`}</td>
      <td>{`${planet.diameter} KM`}</td>
      <td>{`${planet.climate}`}</td>
      <td>{`${planet.gravity}`}</td>
      <td>{`${planet.terrain}`}</td>
      <td>{`${planet.rotation_period}`}</td>
      <td>{`${planet.surface_water}`}</td>
      <td>{planet.films.map((film) => <div key={film}>{film}</div>)}</td>
      <td>{`${planet.created}`}</td>
      <td>{`${planet.edited}`}</td>
      <td>{`${planet.url}`}</td>
    </tr>
  );
}

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching, data } = this.props;
    return (
      <div>
        {isFetching && 'Loading...'}
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>População</th>
              <th>Duração Orbita</th>
              <th>Diametro</th>
              <th>Clima</th>
              <th>Gravidade</th>
              <th>Solo</th>
              <th>Duração Rotação</th>
              <th>Superficie de Água</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Link</th>
            </tr>
            {data && data.map((planet) => createRows(planet))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

Table.defaultProps = {
  data: [],
};

const mapStateToProps = ({ planets: { isFetching, data } }) => ({ isFetching, data });

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
