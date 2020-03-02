import React from 'react';
import { connect } from 'react-redux';
import TextInputFilter from './TextInputFilter';
import FiltersByNumber from './FiltersByNumber';
import '../style/Table.css';

const tableHeaders = () => (
  <tr>
    <th>Name</th>
    <th>Rotation period</th>
    <th>Orbital period</th>
    <th>Diamater</th>
    <th>Climate</th>
    <th>Gravity</th>
    <th>Terrain</th>
    <th>Surface Water</th>
    <th>Population</th>
    <th>Films</th>
    <th>Created</th>
    <th>Edited</th>
    <th>URL</th>
  </tr>
);

const PlanetRows = ({ table }) => (
  table.map(({
    name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter,
    climate, gravity, terrain, surface_water: surfaceWater, population, films, created,
    edited, url,
  }) => (
    <tr key={name}>
      <td>{name}</td>
      <td className="rotation-period">{rotationPeriod}</td>
      <td className="orbital-period">{orbitalPeriod}</td>
      <td className="diameter">{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td className="surface-water">{surfaceWater}</td>
      <td className="population">{population}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
    </tr>
  ))
);

const Table = ({ table }) => (
  <div>
    <h1>StarWars Datatable with Filters</h1>
    <div>
      <TextInputFilter />
    </div>
    <div>
      <FiltersByNumber />
    </div>
    <div className="table-container">
      <table className="table">
        <thead>
          {tableHeaders()}
        </thead>
        <tbody>
          <PlanetRows table={table} />
        </tbody>
      </table>
    </div>
  </div>
);

const mapStateToProps = ({ planetFetcher, filterByName, filterByNumericValue }) => {
  const { isFiltered } = filterByNumericValue;
  if (isFiltered) return { table: filterByNumericValue.data };
  return { table: planetFetcher.data };
};

export default connect(mapStateToProps)(Table);
