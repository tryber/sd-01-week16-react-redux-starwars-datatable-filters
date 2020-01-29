import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';

function createRows(planet) {
  return (
    <tr key={planet.name}>
      <td>{planet.name}</td>
      <td>{planet.population}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.films.map((film) => <div key={film}>{film}</div>)}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
}

class Table extends Component {
  static comparisonCase(filters, data) {
    return filters.reduce((previousList, filter, index) => {
      const planetList = (index === 0) ? data : previousList;
      const obj = {
        bigger: planetList.filter((planet) => Number(planet[filter.column]) > filter.value),
        less: planetList.filter((planet) => Number(planet[filter.column]) < filter.value),
        equal: planetList.filter((planet) => planet[filter.column] === filter.value),
      };
      return obj[filter.comparison];
    }, []);
  }

  constructor(props) {
    super(props);
    this.filterPlanetsName = this.filterPlanetsName.bind(this);
    this.filterNumericNumber = this.filterNumericNumber.bind(this);
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  filterNumericNumber(planetsData) {
    const { numeric_values } = this.props;
    if (numeric_values.length !== 0) {
      return Table.comparisonCase(numeric_values, planetsData);
    }
    return planetsData;
  }

  filterPlanetsName() {
    const { data, name } = this.props;
    if (name) {
      return data.filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));
    }
    return data;
  }

  render() {
    const { isFetching, data } = this.props;
    const filteredPlanets = (data) ? this.filterNumericNumber(this.filterPlanetsName()) : false;
    return (
      <div>
        {isFetching && 'Loading...'}
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>População</th>
              <th>Duração Orbita</th>
              <th>Diametro</th>
              <th>Clima</th>
              <th>Gravidade</th>
              <th>Solo</th>
              <th>Duração Rotação</th>
              <th>Superficie de Água</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Link</th>
            </tr>
            {filteredPlanets && filteredPlanets.map((planet) => createRows(planet))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  name: PropTypes.string,
  numeric_values: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  data: [],
  name: '',
  numeric_values: [],
};

const mapStateToProps = ({
  planets: { isFetching, data },
  filters: {
    name,
    numeric_values,
  },
}) => ({
  isFetching,
  data,
  name,
  numeric_values,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
