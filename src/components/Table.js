import React from 'react';

import { connect } from 'react-redux';
import FilterName from './FilterName';

const renderHeadColumns = () => {
  const columnsProperties = [
    'Name',
    'Population',
    'Orbital Period',
    'Diameter',
    'Rotation Period',
    'Surface Water'
  ]
  return (
    <tr>
      {columnsProperties.map(Property => <th>{Property}</th>)}
    </tr>
  )
}

const filterByName = (data, filtersName) => {
  console.log(data,'filterByName')
  if (filtersName) {
    console.log('filterByName','true',filtersName)
    console.log(data.filter(planet => planet.name.includes(filtersName)))
    return data.filter(({ name }) => name.includes(filtersName));
  } else {
    console.log('filterByName','false')
    return data;
  }
}

const filterColumnPopulation = (data, comparison, value) => {
  console.log(data,'filterColumnPopulation')
  const obj = {
    'Maior que': (() => data.filter(({ population }) => population !== "unknown" && population > value)),
    'Menor que': (() => data.filter(({ population }) => population !== "unknown" && population < value)),
    'Igual a': (() => data.filter(({ population }) => population !== "unknown" && population === value)),
  }
  return obj[comparison];
}

const filterComparison = (data, { column, comparison, value }) => {
  console.log(data,'filterComparison')
  if (column === 'population') return filterColumnPopulation((data, comparison, value));
  const obj = {
    'Maior que': (() => data.filter(planet => planet[column] > value)),
    'Menor que': (() => data.filter(planet => planet[column] < value)),
    'Igual a': (() => data.filter(planet => planet[column] === value)),
  }
  return obj[comparison];
}

const allFilters = (data, filters) => {
  console.log(data,'allFilters')
  return filters.reduce((acc, filter) => {
    let arr = acc || data;
    return filterComparison(arr, filter)
  }, [])
}

const numericFilters = (data, filters) => {
  if (filters.length !== 0) {
    console.log(data,'numericFilters')
    return allFilters(data, filters);
  } else {
    console.log(data,'numericFilters diferente')
    return data;
  }
}

const returnFilterList = (data, filters, filtersName) => {
  console.log('returnFilterList',data)
  const arrayData = filterByName(data, filtersName);
  return numericFilters(arrayData, filters);
}

const createRow = ({name,population,orbital_period,diameter,rotation_period,surface_water}) => ((
  <tr>
    <td>{name}</td>
    <td>{population}</td>
    <td>{orbital_period}</td>
    <td>{diameter}</td>
    <td>{rotation_period}</td>
    <td>{surface_water}</td>
  </tr>
)) 

const Table = ({ data, filters, filtersName }) => {
  const searchName = filtersName.filters
  const planetsFiltered = returnFilterList(data, filters, searchName);
  return (
    <div>
      <table>
        {planetsFiltered && renderHeadColumns()}
        {planetsFiltered && planetsFiltered.map(planet=>createRow(planet))}
      </table>
      {!planetsFiltered && <h3>NOT FOUND</h3>}
    </div>
  );
};


const mapStateToProps = ({ data: { data }, filtersName, filters }) => ({ data, filters, filtersName })

export default connect(mapStateToProps)(Table);
