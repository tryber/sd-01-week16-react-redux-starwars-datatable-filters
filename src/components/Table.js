import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions/apiAndRequests';
import Filter from './Filter';

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
    const { data, inputValue, isFetching } = this.props;
    if (isFetching) {
      return (
        <section>
          <h1>LOADING...</h1>
          <img
            src='https://media.giphy.com/media/FvKe8DbAMnOda/giphy.gif'
            alt='gif terra com a lua girando'
          />
        </section>
      );
    }
    console.log('→→→', inputValue);
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Filter />
        <h2> {inputValue}</h2>
        <table>
          <thead>{this.headColumns()}</thead>
          <tbody>{data && data.map((value) => this.bodyTableRow(value))}</tbody>
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
