import React from 'react';
import { connect } from 'react-redux';

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
    'Superficie de Água'
  ]
  return (
    <tr>
      {columnsProperties.map(property => <th key={property}>{property}</th>)}
    </tr>
  )
}

const filterByName = (data, filtersName) => {
  if (filtersName) {
    return data.filter(({ name }) => name.includes(filtersName));
  } else {
    return data;
  }
}

const allFilters = (data, filters) => {
  return filters.reduce((acc, filter, index) => {
    const array = (index===0) ? data : acc;
    const obj = {
      'Maior que': array.filter(planet => Number(planet[filter.column]) > filter.value),
      'Menor que': array.filter(planet => Number(planet[filter.column]) < filter.value),
      'Igual a': array.filter(planet => Number(planet[filter.column]) === filter.value),
    }
    return obj[filter.comparison]
  }, [])
}

const numericFilters = (data, filters) => {
  if (filters.length !== 0) {
    return allFilters(data, filters);
  } else {
    return data;
  }
}

const returnFilterList = (data, filters, filtersName) => {
  const arrayData = filterByName(data, filtersName);
  const result = numericFilters(arrayData, filters)
  return result;
}

const createRow = (planet) => ((
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
  </tr>
))

const Table = ({ data, filters, filtersName }) => {
  const searchName = filtersName.filters;
  const planetsFiltered = (data) ? returnFilterList(data, filters, searchName) : false;
  return (
    <div>
      <table>
        <tbody>
          {(planetsFiltered) && renderHeadColumns()}
          {(planetsFiltered) && planetsFiltered.map(planet => createRow(planet))}
        </tbody>
      </table>
      {(planetsFiltered === undefined) && <h3>Planeta não encontrado</h3>}
    </div>
  );
};


const mapStateToProps = ({ data: { data }, filtersName, filters }) => ({ data, filters, filtersName })

export default connect(mapStateToProps)(Table);
