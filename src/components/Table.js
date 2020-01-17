import React, { Component } from 'react';
import { connect } from 'react-redux';
// import 'rbx/index.css';
// import { Hero, Title, Table as TB } from 'rbx';
import { planetOfStarWar } from '../actions';
// import PropTypes from 'prop-types';

// const table = () => {
//   <table>
//   <tr>
//     <th>{}</th>
//     <th>{}</th>
//     <th>{}</th>
//     <th>{}</th>
//     <th>{}</th>
//     <th>{}</th>
//     <th>{}</th>
//     <th>{}</th>
//   </tr>
//   <tr>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>
//     <td>{}</td>
//   </tr>
// </table>
class Table extends Component {
  componentDidMount() {
    const { getPlanetFilter } = this.props;
    getPlanetFilter();
  }

  render() {
    const list = [
      'Name',
      'Rotation Period',
      'Orbital Period',
      'Diameter',
      'Climate',
      'Gravity',
      'Terrain',
      'Surface_water',
      'Population',
    ];
    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
    } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <table>
          <tbody>
            <tr>
              {list.map((headersOdTable) => (
                <th>
                  <strong>{headersOdTable}</strong>
                </th>
              ))}
            </tr>
            <tr>
              <td>{name}</td>
              <td>{rotation_period}</td>
              <td>{orbital_period}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surface_water}</td>
              <td>{population}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({
  allPlanetWar: {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  },
}) => ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetFilter: () => dispatch(planetOfStarWar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
