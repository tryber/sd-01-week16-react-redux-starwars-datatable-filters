import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadData } from '../Actions/actions';
import TableHeader from './OrderFilter';

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
  constructor(props) {
    super(props);
    this.filterMain = this.filterMain.bind(this);
    this.filterName = this.filterName.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.orderAsc = this.orderAsc.bind(this);
    this.orderDesc = this.orderDesc.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  orderAsc(data, isNumeric) {
    const { column } = this.props;
    if (!isNumeric) {
      return data.sort((a, b) => {
        if (a[column] > b[column]) return 1;
        if (b[column] > a[column]) return -1;
        return 0;
      });
    }
    return data.sort((a, b) => {
      if (a[column] === 'unknown') return 1;
      if (b[column] === 'unknown') return -1;
      return Number(a[column]) - Number(b[column]);
    });
  }

  orderDesc(data, isNumeric) {
    const { column } = this.props;
    if (!isNumeric) {
      return data.sort((a, b) => {
        if (a[column] > b[column]) return -1;
        if (b[column] > a[column]) return 1;
        return 0;
      });
    }
    return data.sort((a, b) => {
      if (a[column] === 'unknown') return -1;
      if (b[column] === 'unknown') return 1;
      return Number(b[column]) - Number(a[column]);
    });
  }

  changeOrder(data) {
    const { column, order } = this.props;
    const numericColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const isNumeric = numericColumns.includes(column);
    if (!column) return data;
    if (order === 'ASC') return this.orderAsc(data, isNumeric);
    return this.orderDesc(data, isNumeric);
  }

  filterMain(data) {
    const { numericValues } = this.props;
    if (numericValues.length === 0) return data;
    return numericValues.reduce((previousList, filter, index) => {
      const planetList = (index === 0) ? data : previousList;
      const obj = {
        'Maior que': planetList.filter((planet) => Number(planet[filter.select]) > filter.value),
        'Menor que': planetList.filter((planet) => Number(planet[filter.select]) < filter.value),
        'Igual a': planetList.filter((planet) => planet[filter.select] === filter.value),
      };
      return obj[filter.comparison];
    }, []);
  }

  filterName() {
    const { data, filterText } = this.props;
    if (filterText) {
      return data.filter((planet) => planet.name.toUpperCase().includes(filterText.toUpperCase()));
    }
    return data;
  }

  render() {
    const { isFetching, data } = this.props;

    if (isFetching) {
      return <div>Loading...</div>;
    }
    const filteredPlanets = (data) ? this.filterMain(this.filterName()) : false;
    const sortedPlanets = (filteredPlanets) ? this.changeOrder(filteredPlanets) : false;
    return (
      <table>
        <TableHeader />
        <tbody>
          {sortedPlanets && sortedPlanets.map((planet) => createRows(planet))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  getData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  filterText: PropTypes.string,
  numericValues: PropTypes.arrayOf(PropTypes.shape({})),
  column: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};

Table.defaultProps = {
  data: [],
  filterText: '',
  numericValues: [],
};
const mapStateToProps = ({
  dataReducer: {
    isFetching,
    data,
  },
  filters: {
    name: filterText,
    numeric_values: numericValues,
  },
  sort: { column, order },
}) => ({
  isFetching,
  data,
  filterText,
  numericValues,
  column,
  order,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(loadData()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
