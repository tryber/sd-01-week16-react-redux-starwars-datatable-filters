import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
// import PropTypes from 'prop-types';
class Table extends Component {
  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }

  headColumns() {
    const textColumns = [
      'Nome',
      'População',
      'Duração Orbita',
      'Diametro',
      'Clima',
      'Gravidade',
      'Solo',
      'Duração Rotação',
      'Superficie de Água',
    ];
    return (
      <tr>
        {textColumns.map((textName) => (
          <th key={textName}>{textName}</th>
        ))}
      </tr>
    );
  }

  bobyTableRow(planets) {
    return (
      <tr key={planets.name}>
        <td>{planets.name}</td>
        <td>{planets.population}</td>
        <td>
          {planets.orbital_period}
          {' '}
        </td>
        <td>
          {planets.diameter}
          {' '}
        </td>
        <td>{planets.climate}</td>
        <td>{planets.gravity}</td>
        <td>{planets.terrain}</td>
        <td>
          {planets.rotation_period}
          {' '}
        </td>
        <td>
          {planets.surface_water}
          {' '}
        </td>
      </tr>
    );
  }

  render() {
    const { data, isFetching, error } = this.props;
    console.log(data);
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>

        <table>
          <tbody>
            {planetsFiltered && renderHeadColumns()}
            {planetsFiltered && planetsFiltered.map((planet) => createRow(planet))}
          </tbody>
        </table>
        {planetsFiltered === undefined && <h3>Planeta não encontrado</h3>}
      </div>
    );
  }
}

const mapStateToProps = ({ allPlanetWar: { isFetching, data, error } }) => ({
  isFetching,
  data,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
