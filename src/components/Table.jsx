import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';



class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.filterByName = this.filterByName.bind(this);
    this.filterByNumber = this.filterByNumber.bind(this);
    this.filteredContent = this.filteredContent.bind(this);
  }

  comparisonCase(ColumnValue, ComparisonSign, Value) {
    switch (ComparisonSign) {
      case 'greater':
        if (ColumnValue > Value) return true;
        return false;
      case 'less':
        if (ColumnValue < Value) return true;
        return false;
      case 'iqual':
        if (ColumnValue === Value) return true;
        return false;
      default:
        return false;
    }
  }

  filterByNumber(newData) {
    const { addFilter } = this.props;
    if (addFilter !== []) {
      const PlanetsEachFilter = addFilter.map((FilerObj) =>
        newData.filter((PlanetObj) =>
          this.comparisonCase(Number(PlanetObj[FilerObj.column]), FilerObj.comparison, Number(FilerObj.value))
        )
      );
      return newData.filter((CurrentPlanet) => {
        const boolean = PlanetsEachFilter
          .map((PlanetsEachFilter) => PlanetsEachFilter
            .includes(CurrentPlanet));
        return boolean.every((bool) => bool === true);
      });
    }
    return newData;
  }

  filterByName() {
    const { data, name } = this.props;
    if (name !== '') {
      return data.filter(((PlanetObj) => PlanetObj.name.toLowerCase().includes(name.toLowerCase())));
    }
    return data;
  }

  filteredContent() {
    const { shortOrder } = this.props;
    const { column, order } = shortOrder;
    const filteredData = this.filterByNumber(this.filterByName());
    const shortData = [...filteredData];
    shortData.sort(({ [column]: A }, { [column]: B }) => {
      if (A > B) {
        return -1;
      }
      if (B < A) {
        return 1;
      }
      return 0;
    });
    if (order === 'ASC') {
      shortData.reverse();
    }
    return shortData;
  }

  renderContent(categories) {
    const content = this.filteredContent();
    return (
      <tbody>
        {content.map((planet) => <tr key={planet.name}>
          {categories.map((key) => <td key={key}>{planet[key]}</td>)}
        </tr>)}
      </tbody>
    );
  }

  renderTable() {
    const { data } = this.props;
    const categories = Object.keys(data[0]).filter((category) => category !== 'residents');
    return (
      <Table responsive="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            {categories.map((category) => <th key={category}>{category}</th>)}
          </tr>
        </thead>
        {this.renderContent(categories)}
      </Table>
    );
  }

  render() {
    const { data, isFetching } = this.props;
    return (
      <div>
        {data && !isFetching ? this.renderTable() : <p>Loading...</p>}
      </div>
    );
  }
}

const mapStateToProps = ({
  database: { data, isFetching },
  filters: { name, add_filter, shortOrder },

}) => ({
  data,
  isFetching,
  name,
  addFilter: add_filter,
  shortOrder,
});

TableContainer.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string.isRequired),
    gravity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  name: PropTypes.string,
  shortOrder: PropTypes.shape({
    column: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }),
  addFilter: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

TableContainer.defaultProps = {
  data: null,
  isFetching: false,
  name: '',
};

export default connect(mapStateToProps)(TableContainer);
