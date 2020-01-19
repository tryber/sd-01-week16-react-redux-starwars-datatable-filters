import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions/apiAndRequests';
import Filter from './Filter';
// import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.headColumns = this.headColumns.bind(this);
    this.bodyTableRow = this.bodyTableRow.bind(this);
  }

  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }

  headColumns() {
    const textColumns = [
      'Nome',
      'População',
      'Duração Orbita',
      'Diametro',
      'Clima',
      'Gravidade',
      'Solo',
      'Duração Rotação',
      'Superficie de Água',
    ];
    return (
      <tr>
        {textColumns.map((textName) => (
          <th key={textName}>{textName}</th>
        ))}
      </tr>
    );
  }

  bodyTableRow(planets) {
    return (
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
      </tr>
    );
  }

  render() {
    const {
      input: { len = 0 },
    } = this.props;
    const { isFetching, data, error } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Filter inputValue="Douglas" />
        <table>
          <thead>{this.headColumns()}</thead>
          <tbody>{data && data.map((value) => this.bodyTableRow(value))}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (
  { allPlanetWar: { isFetching, data, error } },
  { updateInput: { charge } },
) => ({
  charge,
  isFetching,
  data,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
