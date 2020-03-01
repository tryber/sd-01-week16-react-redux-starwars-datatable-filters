import React from 'react';
import { connect } from 'react-redux';
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

const Table = ({ table }) => {
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            {tableHeaders()}
          </thead>
          <tbody>
            {table.map(({
              name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter,
              climate, gravity, terrain, surface_water: surfaceWater, population, films, created,
              edited, url,
            }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  table: state.data,
});

export default connect(mapStateToProps)(Table);
