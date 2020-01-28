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

  comparisonCase(Column_Value, Comparison_Sign, Value) {
    switch (Comparison_Sign) {
      case 'greater':
        if (Column_Value > Value) return true;
        return false;
      case 'less':
        if (Column_Value < Value) return true;
        return false;
      case 'iqual':
        if (Column_Value === Value) return true;
        return false;
      default:
        return false;
    }
  }

  filterByNumber(newData) {
    const { add_filter } = this.props;
    if (add_filter !== []) {
      const Planets_Each_Filter = add_filter.map((Filer_Obj) =>
        newData.filter((Planet_Obj) =>
          this.comparisonCase(Number(Planet_Obj[Filer_Obj.column]), Filer_Obj.comparison, Number(Filer_Obj.value))
        )
      )
      return newData.filter((Current_Planet) => {
        const boolean = Planets_Each_Filter.map((Each_Filter_Array) => Each_Filter_Array.includes(Current_Planet))
        return boolean.every((bool) => bool === true);
      })
    }
    return newData;
  }

  filterByName() {
    const { data, name } = this.props;
    if (name !== '') {
      return data.filter((Planet_Obj => Planet_Obj['name'].toLowerCase().includes(name.toLowerCase())));
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
    })
    if (order === 'ASC') {
      shortData.reverse();
    }
    return shortData
  }

  renderContent(categories) {
    const content = this.filteredContent()
    return (
      <tbody>
        {content.map(planet => <tr key={planet.name}>
          {categories.map(key => <td key={key}>{planet[key]}</td>)}
        </tr>)}
      </tbody>
    );
  }

  renderTable() {
    const { data } = this.props;
    const categories = Object.keys(data[0]).filter(category => category !== 'residents');
    return (
      <Table responsive="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            {categories.map(category => <th key={category}>{category}</th>)}
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
  add_filter,
  shortOrder,
});

Table.propTypes = {
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
};

Table.defaultProps = {
  data: null,
  isFetching: false,
  name: '',
};

export default connect(mapStateToProps)(TableContainer);
