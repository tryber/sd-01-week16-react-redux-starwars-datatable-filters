import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets } from '../actions/apiAndRequests';
import Filter from './Filter';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import ValueInput from './ValueInput';
import Loading from './Loading';

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
  </tr>
);

const switchOfTable = (data, filters) => {
  let dataFinal = null;
  if (filters) {
    dataFinal = data.filter((planet) => planet.name.toUpperCase().includes(filters.toUpperCase()));
  } else {
    dataFinal = data;
  }
  console.log(dataFinal);

  return dataFinal.map((date) => bodyTableRow(date));
};

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
  ];
  return (
    <tr>
      {textColumns.map((textName) => (
        <th key={textName}>{textName}</th>
      ))}
    </tr>
  );
};

class Table extends Component {
  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }

  render() {
    const { data, inputValue, isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <br />
        <Filter />
        <br />
        <SelectColumn />
        <br />
        <SelectComparison />
        <br />
        <ValueInput />
        <br />
        <table>
          <thead>{headColumns()}</thead>
          <tbody>{data && switchOfTable(data, inputValue)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({ allPlanetWar: { isFetching, data, error }, filterName: { name } }) => ({
  isFetching,
  data,
  error,
  inputValue: name,
});
const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetFetch: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string.isRequired,
};
