import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions/apiAndRequests';
import { removeFilters } from '../actions/actionNumberFilter';
import Filter from './Filter';
import Loading from './Loading';
import NumberInputDropDown from './NumberInputDropDown';

// const comparison = (condition) => {
//   switch (condition) {
//     case 'greater':
//       return 'maior que';
//     case 'less':
//       return 'menor que';
//     case 'iqual':
//       return 'igual a';
//     default:
//       return null;
//   }
// }

const bodyTableRow = (planets) => (
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
    <td>
      {planets.films.map((dataOfFilme) => (
        <div key={dataOfFilme}>{dataOfFilme}</div>
      ))}
    </td>
    <td>{planets.created}</td>
    <td>{planets.edited}</td>
    <td>{planets.url}</td>
  </tr>
);

const switchOfTable = (data, filters, numbers) => {
  let dataFinal = null;
  if (filters) {
    dataFinal = data.filter((planet) => planet.name.toUpperCase().includes(filters.toUpperCase()));
  } else if (numbers) {
    dataFinal = data.filter((planet) => planet.name.toUpperCase().includes(filters.toUpperCase()));
  } else {
    dataFinal = data;
  }
  return dataFinal.map((date) => bodyTableRow(date));
};

const headColumns = () => {
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
    'FILMES',
    'CRIADO',
    'EDITADO',
    'URL',
  ];
  return (
    <tr>
      {textColumns.map((textName) => (
        <th key={textName}>{textName}</th>
      ))}
    </tr>
  );
};

const mapOfObject = (object) => Object.keys(object).map((key) => <span>{` → ${object[key]} ← `}</span>);
class Table extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }

  handleClick(index) {
    const { numeric_values, removePlanetFilters } = this.props;
    // console.log('→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→');
    // console.log(numeric_values);
    // console.log('→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→');
    numeric_values.splice(index, 1);
    numeric_values.pop();
    // const finalTeste = teste.pop();
    // const finalTeste2 = finalTeste.pop();
    // numeric_values.pop();
    // console.log('+++++++++++++++++++++++');
    // console.log(teste);
    // console.log('+++++++++++++++++++++++');
    // console.log('→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→');
    // console.log(numeric_values);
    // console.log('→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→');
    removePlanetFilters(numeric_values);
  }

  render() {
    const {
      data, inputValue, isFetching, numeric_values,
    } = this.props;
    console.log('→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→');
    console.log(numeric_values);
    console.log('→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→');
    if (isFetching) return <Loading />;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <br />
        <Filter />
        <br />
        <NumberInputDropDown />
        <ul>
          {numeric_values.map((value, index) => (
            <li key={`value is ${value} for ${index}`}>
              {numeric_values && mapOfObject(value)}

              <button onClick={() => this.handleClick(index)}>X</button>
            </li>
          ))}
        </ul>
        <br />
        <table>
          <thead>{headColumns()}</thead>
          <tbody>{data && switchOfTable(data, inputValue, numeric_values)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({
  allPlanetWar: { isFetching, data, error },
  filterName: { name },
  filters: { numeric_values },
}) => ({
  isFetching,
  data,
  error,
  inputValue: name,
  numeric_values,
});
const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
  removePlanetFilters: (value) => dispatch(removeFilters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetFetch: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string.isRequired,
};
