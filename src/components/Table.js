import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPlanets } from '../actions/SwAPI';
import Filter from './Filter';

const headColumns = () => {
  const textColumns = [
    'NOME',
    'POPULAÇÃO',
    'DURAÇÃO DA ORBITA',
    'DIÂMENTRO',
    'CLIMA',
    'GRAVIDADE',
    'SOLO',
    'DURAÇÃO DA ROTAÇÃO',
    'SUPERFÍCIE DE ÁGUA',
    'FILMES',
    'CRIADO',
    'EDITADO',
    'URL',
  ];
  return (
    <tr>
      {textColumns.map((textName) => (
        <th key={textName}>{textName}</th>
      ))}
    </tr>
  );
};

const bodyTableRow = (planets) => (
  <tr key={planets.name}>
    <td>{planets.name}</td>
    <td>{planets.population}</td>
    <td>{planets.orbital_period}</td>
    <td>{planets.diameter}</td>
    <td>{planets.climate}</td>
    <td>{planets.gravity}</td>
    <td>{planets.terrain}</td>
    <td>{planets.rotation_period}</td>
    <td>{planets.surface_water}</td>
    <td>
      {planets.films.map((dataOfFilme) => (
        <div key={dataOfFilme}>{dataOfFilme}</div>
      ))}
    </td>
    <td>{planets.created}</td>
    <td>{planets.edited}</td>
    <td>{planets.url}</td>
  </tr>
);

class Table extends Component {
  componentDidMount() {
    const { planetFetch } = this.props;
    planetFetch();
  }

  render() {
    const { isFetching, data, error } = this.props;
    if (isFetching) return <h1>Loading...</h1>;

    const finalData = data;

    return (
      <div>
        <Filter />
        <table>
          <thead>{headColumns()}</thead>
          <tbody>{data && finalData.map((data) => bodyTableRow(data))}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ allPlanetWar: { isFetching, data, error }, filterName: { name } }) => ({
  data,
  error,
  isFetching,
  name,
});

const mapDispatchToProps = (dispatch) => ({
  planetFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
