import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData } from '../actions/starWarsApi';
import './table.css';

class Table extends React.Component {
  static generateTableHead(data) {
    if (data.length > 0) {
      const arrayOfTags = Object.entries(data[0])
        .map((tag) => tag[0])
        .filter((name) => name !== 'residents');
      return (
        <table>
          <thead>
            <tr>
              {arrayOfTags.map((tag) => (
                <th key={`${tag}1`}>{tag}</th>
              ))}
            </tr>
          </thead>
          <tbody>{Table.generateTableBody(data, arrayOfTags)}</tbody>
        </table>
      );
    }
    return <p>Planeta não encontrado</p>;
  }

  static generateTableBody(data, arrayOfTags) {
    return data.map((planet) => (
      <tr key={planet.diameter}>
        {arrayOfTags.map((tag) => (
          <td key={tag}>{planet[tag]}</td>
        ))}
      </tr>
    ));
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    if (this.props.isFetching) {
      return <p>LOADING...</p>;
    }
    if (this.props.sucess) {
      if (this.props.finalData) {
        return Table.generateTableHead(this.props.finalData);
      }
      return Table.generateTableHead(this.props.initialData.results);
    }
    return <div>ERROR</div>;
  }
}

const mapStateToProps = (state) => ({
  finalData: state.finalFilterReducer.data,
  initialData: state.apiServiceReducer.data,
  isFetching: state.apiServiceReducer.isFetching,
  sucess: state.apiServiceReducer.sucess,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
});

Table.propTypes = {
  sucess: PropTypes.string.isRequired,
  isFetching: PropTypes.string.isRequired,
  initialData: PropTypes.shape({
    count: PropTypes.number.isRequired,
    results: PropTypes.arrayOf.isRequired,
  }).isRequired,
  finalData: PropTypes.shape({
    count: PropTypes.number.isRequired,
    results: PropTypes.arrayOf.isRequired,
  }).isRequired,
  loadData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
