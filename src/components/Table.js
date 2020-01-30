import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions/apiAndRequests';
import Filter from './Filter';
import Loading from './Loading';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.headColumns = this.headColumns.bind(this);
    this.bodyTableRow = this.bodyTableRow.bind(this);
    this.switchOfTable = this.switchOfTable.bind(this);
  }

  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }

  capitalize(word) {
    const newWord = word.toLowerCase();
    return newWord && newWord[0].toUpperCase() + newWord.slice(1);
  }

  switchOfTable(data, filters) {
    let dataFinal = null;
    switch (filters) {
      case filters !== '':
        console.log('incaio ',filters);
        dataFinal = data.filter((planet) => planet.name.toUpperCase().includes(filters.toUpperCase()));
        break;
      default:
        dataFinal = data;
        break;
    }
    return dataFinal.map((data) => this.bodyTableRow(data));
  }

  // if (filters) {
  //   dataFinal = data.filter((planet) => planet.name.toUpperCase().includes(filters.toUpperCase()));
  // } else {
  //   dataFinal = data
  // }

  // return dataFinal.map((data) => this.bodyTableRow(data));

  headColumns() {
    const textColumns = [
      'NOME',
      'POPULAÇÃO',
      'DURAÇÃO DA ORBITA',
      'DIÂMENTRO',
      'CLIMA',
      'GRAVIDADE',
      'SOLO',
      'DURAÇÃO DA ROTAÇÃO',
      'SUPERFÍCIE DE ÁGUA',
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
    const { data, inputValue, isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Filter />
        <h2>
          {' '}
          {inputValue}
        </h2>
        <table>
          <thead>{this.headColumns()}</thead>
          <tbody>{data && this.switchOfTable(data, inputValue)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({
  allPlanetWar: { isFetching, data, error },
  updateInput: { inputValue },
}) => ({
  isFetching,
  data,
  error,
  inputValue,
});
const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
