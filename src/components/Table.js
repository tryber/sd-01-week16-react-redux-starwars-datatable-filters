import React from 'react';
import { connect } from 'react-redux';

const Table = ({ table }) => {
  return (
    <div>
      <div>StarWars Datatable with Filters</div>
      <div>
        { table.map((
          { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, films, created, edited, url }
        ) =>{
          <form>
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

          </form>
        } planet.name) }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  table: state.data,
});

export default connect(mapStateToProps)(Table);
