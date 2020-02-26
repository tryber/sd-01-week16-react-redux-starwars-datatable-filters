import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilterName from './FilterName';

const filterPlanetByName = (data, textInput) => {
  if (textInput) {
    return data.filter(({ name }) => name.toLowerCase().includes(textInput));
  }
  return data;
};

const tableStarWars = (data) => {
  if (!data) return <div>Loading...</div>;
  return (
    <table>
      <tbody>
        <tr className="title">
          <td>Planet Name</td>
          <td>rotation_period</td>
          <td>orbital_period</td>
          <td>diameter</td>
          <td>climate</td>
          <td>gravity</td>
          <td>terrain</td>
          <td>surface_water</td>
          <td>population</td>
          <td>films</td>
          <td>created</td>
          <td>edited</td>
          <td>url</td>
        </tr>
        {data.map((planets) => (
          <tr key={`Planeta: ${planets.name}`}>
            <td key={planets.name}>{planets.name}</td>
            <td key={planets.rotation_period}>{planets.rotation_period}</td>
            <td key={planets.orbital_period}>{planets.orbital_period}</td>
            <td key={planets.diameter}>{planets.diameter}</td>
            <td key={planets.climate}>{planets.climate}</td>
            <td key={planets.gravity}>{planets.gravity}</td>
            <td key={planets.terrain}>{planets.terrain}</td>
            <td key={planets.surface_water}>{planets.surface_water}</td>
            <td key={planets.population}>{planets.population}</td>
            <td key={planets.films}>{planets.films.map((films) => <p key={films}>{films}</p>)}</td>
            <td key={planets.created}>{planets.created}</td>
            <td key={planets.edited}>{planets.edited}</td>
            <td key={planets.url}>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Table = ({ data, filters }) => {
  const planetsFiltered = filters
    ? tableStarWars(filterPlanetByName(data, filters))
    : tableStarWars(data);
  return (
    <div>
      <FilterName />
      {planetsFiltered}
    </div>
  );
};

const mapStateToProps = ({ data: { data }, filterName: { filters } }) => ({
  data,
  filters,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  filters: PropTypes.string,
};

Table.defaultProps = {
  data: [],
  filters: '',
};

export default connect(mapStateToProps)(Table);
