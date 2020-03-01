import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { fetchPlanets, sortAsc, sortDesc } from '../actions/SwAPI';
import Filter from './Filter';
import FormsFilters from './FormsFilters';
import { removeFilters } from '../actions/filtersUpdate';
import OrderTable from './OrderTable';

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

const chooseBiggest = (planets, filterOfForm) => (
  planets.filter((data) => Number(data[filterOfForm.column]) > filterOfForm.value));

const chooseSmallest = (planets, filterOfForm) => (
  planets.filter((data) => Number(data[filterOfForm.column]) < filterOfForm.value));

const chooseEqual = (planets, filterOfForm) => (
  planets.filter((data) => data[filterOfForm.column] === filterOfForm.value));

const mapOfObject = (object) => Object.keys(object).map((key) => <span>{` | ${object[key]}`}</span>);

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

const filterFinal = (planetsData, listDescision) => {
  if (listDescision.length !== 0) {
    return comparisonCase(listDescision, planetsData);
  }
  return planetsData;
};

const ascOrDescTable = (planets, condition, key) => {
  switch (condition) {
    case 'ASC':
      return sortAsc(planets, key);
    default:
      return sortDesc(planets, key);
  }
};

const conditionForNameFilter = (data, filter) => {
  if (filter) {
    return data.filter((planet) => planet.name.toUpperCase().includes(filter.toUpperCase()));
  }
  return data;
};

class Table extends Component {
  componentDidMount() {
    const { planetFetch } = this.props;
    planetFetch();
  }

  render() {
    const {
      isFetching, data, inputValue, numericValues, removePlanetFilters, order, column,
    } = this.props;
    const Data = data
      ? filterFinal(conditionForNameFilter(data, inputValue), numericValues)
      : [];
    if (isFetching) return <h1>Loading...</h1>;
    const finalData = ascOrDescTable(Data, order, column);

    return (
      <div>
        <OrderTable />
        <Filter />
        <FormsFilters />
        <ul>
          {numericValues.map((value, index) => (
            <li key={`value is ${value}`}>
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
  orderTable: { column, order },
}) => ({
  data,
  error,
  isFetching,
  inputValue: name,
  numericValues,
  column,
  order,
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
  column: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};

Table.defaultProps = {
  data: [],
  numericValues: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
