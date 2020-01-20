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
    if (text !== '') return data.results.filter(planet => planet.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    return data.results;
  }

  filterDataNum() {
    const { column, comparison, value } = this.props;
    const filteredData = this.filterDataText();
    if (column && comparison && value && column !== 'none' && comparison !== 'none' && value !== 'none') {
      switch (comparison) {
        case 'maior que':
          return filteredData.filter(planet => {
            const num = Number(planet[column])
            return num > Number(value)
          })
        case 'menor que':
          return filteredData.filter(planet => {
            const num = Number(planet[column])
            return num < Number(value)
          })
        case 'igual a':
          return filteredData.filter(planet => {
            const num = Number(planet[column])
            return num === Number(value)
          })
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
        {filterPlanets.map(planet => {
          const { name, diameter, rotation_period,
            orbital_period, gravity, population,
            climate, terrain, surface_water,
          } = planet;
          return (
            <tr>
              <td>{name}</td>
              <td>{terrain}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{population}</td>
              <td>{diameter}</td>
              <td>{orbital_period}</td>
              <td>{rotation_period}</td>
              <td>{surface_water}</td>
            </tr>
          )
        })}
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
    error,
    isFetching,
    data,
  },
  filterPlanets: {
    filters: { text,
      numericValues: { column,
        comparison,
        value }
    }
  }
}) => ({
  error,
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
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};

Table.defaultProps = {
  error: null,
};


export default connect(mapStateToProps, mapDispatchToProps)(Table);
