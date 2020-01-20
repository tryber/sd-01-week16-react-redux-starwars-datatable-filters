import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import filterText from '../actions/APIFetching';

class Table extends Component {

  componentDidMount() {
    this.props.getPlanets();
  }

  filterDataText() {
    const { data, text } = this.props;
    if (text !== '') return data.results.filter((planet) => planet.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    return data.results;
  }

  filterDataNum() {
    const { column, comparison, value } = this.props;
    const filteredData = this.filterDataText();
    if (column && comparison && value) {
      switch (comparison) {
        case 'maior que':
          return filteredData.filter((planet) => {
            const num = Number(planet[column]);
            return num > Number(value);
          });
        case 'menor que':
          return filteredData.filter((planet) => {
            const num = Number(planet[column]);
            return num < Number(value);
          });
        case 'igual a':
          return filteredData.filter((planet) => {
            const num = Number(planet[column]);
            return num === Number(value);
          });
        default:
          return filteredData;
      }
    }
    return filteredData;
  }

  renderContent() {
    const filterPlanets = this.filterDataNum();
    return (
      <table>
        <tr>
          <th>name</th>
          <th>terrain</th>
          <th>climate</th>
          <th>gravity</th>
          <th>population</th>
          <th>diameter</th>
          <th>orbital period</th>
          <th>rotation period</th>
          <th>surface water</th>
        </tr>
        {filterPlanets.map((planet) => (
          <tr>
            <td>{planet.name}</td>
            <td>{planet.terrain}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.population}</td>
            <td>{planet.diameter}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
          </tr>
        ))}
      </table>
    );
  }

  render() {
    const { data, isFetching } = this.props;
    return (
      <div>
        {isFetching && <p> Loading... </p>}
        {!isFetching && data && this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({
  planetsData: {
    isFetching,
    data,
  },
  filterPlanets: {
    filters: { text,
      numericValues: { column,
        comparison,
        value },
    },
  },
}) => ({
  isFetching,
  data,
  text,
  column,
  comparison,
  value,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(filterText()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.number,
  data: PropTypes.shape({
    count: PropTypes.number.isRequired,
    next: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
  }),
  getPlanets: PropTypes.func.isRequired,
};

Table.defaultProps = {
  data: null,
  column: null,
  comparison: null,
  value: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
