import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/apiAndRequests';
import { removeFilters } from '../actions/actionNumberFilter';
import Filter from './Filter';
import Loading from './Loading';
import NumberInputDropDown from './NumberInputDropDown';
import OrderTable from './OrderTable';
import {sortAsc, sortDesc } from '../service/functions';

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

const ascOrDescAlphabeticalOrder = (planets, condition, key) => {
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

const filterTotFinal = (planetsData, listDescision) => {
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

const mapOfObject = (object) => Object.keys(object).map((key) => <span>{` → ${object[key]} ← `}</span>);
class Table extends Component {
  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }

  render() {
    const { data, inputValue, isFetching,
      numeric_values, removePlanetFilters, column, order } = this.props;
    const Data = data
      ? filterTotFinal(conditionForNameFilter(data, inputValue), numeric_values) : [];
    if (isFetching) return <Loading />;
    const finalData = ascOrDescAlphabeticalOrder(Data, order, column);
    return (
      <div className="content-table">
        <h1>StarWars Datatable with Filters</h1>
        <Filter /> <br />
        <OrderTable /> <br />
        <NumberInputDropDown />
        <ul>
          {numeric_values.map((value, index) => (
            <li key={`value is ${value} for ${value}`}>
              {numeric_values && mapOfObject(value)}
              <button onClick={() => removePlanetFilters(index)}>X</button>
            </li>
          ))}
        </ul>
        <br />
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
  filters: { numeric_values },
  filtersOrder: { column, order },
}) => ({
  isFetching,
  data,
  error,
  inputValue: name,
  numeric_values,
  column,
  order,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
  removePlanetFilters: (value) => dispatch(removeFilters(value)),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetFetch: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string.isRequired,
  numeric_values: PropTypes.arrayOf(PropTypes.shape({})),
  column: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};

Table.defaultProps = {
  data: [],
  numeric_values: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
