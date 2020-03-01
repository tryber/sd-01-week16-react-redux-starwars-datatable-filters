import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/SwAPI';
import Filter from './Filter';
import FormsFilters from './FormsFilters';
import { removeFilters } from '../actions/filtersUpdate';

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

const conditionForNameFilter = (data, filter) => {
  if (filter) {
    return data.filter((planet) => planet.name.toUpperCase().includes(filter.toUpperCase()));
  }
  return data;
};

const filterFinal = (planetsData, listDescision) => {
  if (listDescision.length !== 0) {
    return comparisonCase(listDescision, planetsData);
  }
  return planetsData;
};

const chooseBiggest = (planets, filterOfForm) => (
  planets.filter((data) => Number(data[filterOfForm.column]) > filterOfForm.value));

const chooseSmallest = (planets, filterOfForm) => (
  planets.filter((data) => Number(data[filterOfForm.column]) < filterOfForm.value));

const chooseEqual = (planets, filterOfForm) => (
  planets.filter((data) => data[filterOfForm.column] === filterOfForm.value));

const comparisonCase = (filters, data) => filters.reduce((previous, filter, index) => {
  const dataComparison = index === 0 ? data : previous;
  switch (filter.comparison) {
    case 'bigger':
      return chooseBiggest(dataComparison, filter);
    case 'less':
      return chooseSmallest(dataComparison, filter);
    case 'equal':
      return chooseEqual(dataComparison, filter);
    default:
      return [];
  }
}, []);

const mapOfObject = (object) => Object.keys(object).map((key) => <span>{` | ${object[key]}`}</span>);

class Table extends Component {
  componentDidMount() {
    const { planetFetch } = this.props;
    planetFetch();
  }

  render() {
    const {
      isFetching, data, inputValue, numericValues, removePlanetFilters,
    } = this.props;
    if (isFetching) return <h1>Loading...</h1>;
    const finalData = data
      ? filterFinal(conditionForNameFilter(data, inputValue), numericValues)
      : [];

    return (
      <div>
        <Filter />
        <FormsFilters />
        <ul>
          {numericValues.map((value, index) => (
            <li key={`value is ${value} for ${index}`}>
              {numericValues && mapOfObject(value)}
              <button onClick={() => removePlanetFilters(index)}>X</button>
            </li>
          ))}
        </ul>
        <table>
          <thead>{headColumns()}</thead>
          <tbody>{data && finalData.map((data) => bodyTableRow(data))}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({
  allPlanetWar: { isFetching, data, error },
  filterName: { name },
  filtersForm: { numeric_values: numericValues },
}) => ({
  data,
  error,
  isFetching,
  inputValue: name,
  numericValues,
});

const mapDispatchToProps = (dispatch) => ({
  planetFetch: () => dispatch(fetchPlanets()),
  removePlanetFilters: (value) => dispatch(removeFilters(value)),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  planetFetch: PropTypes.func.isRequired,
  removePlanetFilters: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  data: [],
  numericValues: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
