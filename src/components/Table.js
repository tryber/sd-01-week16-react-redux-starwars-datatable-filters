import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filtersType from '../types';

const renderHeadColumns = () => {
  const columnsProperties = [
    'Nome',
    'População',
    'Duração Orbita',
    'Diametro',
    'Clima',
    'Gravidade',
    'Solo',
    'Duração Rotação',
    'Superficie de Água',
    'Films',
    'Created',
    'Edited',
    'Link',
  ];
  return (
    <tr>
      {columnsProperties.map((property) => <th key={property}>{property}</th>)}
    </tr>
  );
};

const filterByName = (data, filtersName) => {
  if (filtersName) {
    return data.filter(({ name }) => name.includes(filtersName));
  }
  return data;
};

const allFilters = (data, filters) => (
  filters.reduce((acc, filter, index) => {
    const array = (index === 0) ? data : acc;
    const obj = {
      'Maior que': array.filter((planet) => Number(planet[filter.column]) > filter.value),
      'Menor que': array.filter((planet) => Number(planet[filter.column]) < filter.value),
      'Igual a': array.filter((planet) => planet[filter.column] === filter.value),
    };
    return obj[filter.comparison];
  }, [],
  )
);

const numericFilters = (data, filters) => {
  if (filters.length !== 0) return allFilters(data, filters);
  return data;
};

const returnFilterList = (data, filters, filtersName) => {
  const arrayData = filterByName(data, filtersName);
  const result = numericFilters(arrayData, filters);
  return result;
};

const createRow = (planet) => (
  <tr key={planet.name}>
    <td>{`${planet.name}`}</td>
    <td>{`${planet.population}`}</td>
    <td>{`${planet.orbital_period} Hours`}</td>
    <td>{`${planet.diameter} KM`}</td>
    <td>{`${planet.climate}`}</td>
    <td>{`${planet.gravity}`}</td>
    <td>{`${planet.terrain}`}</td>
    <td>{`${planet.rotation_period} Hours`}</td>
    <td>{`${planet.surface_water} %`}</td>
    <td>
      {planet.films.map((film) => <div>{film}</div>)}
    </td>
    <td>{`${planet.created}`}</td>
    <td>{`${planet.edited} %`}</td>
    <td>{`${planet.url} %`}</td>
  </tr>
);

const Table = ({ data, filters, filtersName }) => {
  const searchName = filtersName.filters;
  const planetsFiltered = (data) ? returnFilterList(data, filters, searchName) : false;
  return (
    <div>
      <table>
        <tbody>
          {(planetsFiltered) && renderHeadColumns()}
          {(planetsFiltered) && planetsFiltered.map((planet) => createRow(planet))}
        </tbody>
      </table>
      {(planetsFiltered === undefined) && <h3>Planeta não encontrado</h3>}
    </div>
  );
};


const mapStateToProps = ({ data: { data }, filtersName, filters }) => (
  { data, filters, filtersName }
);


Table.propTypes = {
  filtersName: PropTypes.shape({
    filters: PropTypes.string,
  }),
  filters: filtersType.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

Table.defaultProps = {
  data: [],
};

export default connect(mapStateToProps)(Table);
