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
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
    ];
    const {
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
      <table>
        <tbody>
          <tr>
            <th>{list[0]}</th>
            <th>{list[1]}</th>
            <th>{list[2]}</th>
            <th>{list[3]}</th>
            <th>{list[4]}</th>
            <th>{list[5]}</th>
            <th>{list[6]}</th>
            <th>{list[7]}</th>
          </tr>
          <tr>
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
    );
  }
}

const mapStateToProps = ({
  allPlanetWar: {
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
  getPlanetFilter: () => dispatch(planetOfStarWar),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
