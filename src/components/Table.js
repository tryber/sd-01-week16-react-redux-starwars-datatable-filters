import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
// import PropTypes from 'prop-types';
class Table extends Component {
  componentDidMount() {
    const { getPlanetFetch } = this.props;
    getPlanetFetch();
  }
  // dateOfHeader.map((dataTable) => (
  //   <th key={dataTable}>
  //     <strong>{dataTable}</strong>
  //   </th>
  // ))

  render() {
    const { data, isFetching, error } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <table>
          <tbody>
            <tr>{}</tr>
            <tr>
              {/* <td>{name}</td>
              <td>{rotation_period}</td>
              <td>{orbital_period}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surface_water}</td>
              <td>{population}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ allPlanetWar: { isFetching, data, error } }) => ({
  isFetching,
  data,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
