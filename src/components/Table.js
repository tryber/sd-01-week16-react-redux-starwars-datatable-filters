import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/starWarsApi';
import './table.css';

class Table extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  static generateTableBody(data, arrayOfTags) {
    return data.map(planet => {
      return (
        <tr key={planet.diameter}>
          {arrayOfTags.map((tag) => <td key={tag}>{planet[tag]}</td>)}
        </tr>
      );
    });
  }

  generateTableHead(data) {
    if (data.length > 0) {
      const arrayOfTags = Object.entries(data[0])
        .map((tag) => tag[0])
        .filter((name) => name !== 'residents');
      return (
        <table>
          <thead>
            <tr>
              {arrayOfTags.map((tag) => <th key={`${tag}1`}>{tag}</th>)}
            </tr>
          </thead>
          <tbody>{Table.generateTableBody(data, arrayOfTags)}</tbody>
        </table>
      );
    }
      return <p>Planeta não encontrado</p>;
  }

  render() {
    if (this.props.isFetching) {
      return <p>LOADING...</p>;
    }
    if (this.props.sucess) {
      if (this.props.finalData) {
        return this.generateTableHead(this.props.finalData);
      }
      return this.generateTableHead(this.props.initialData.results);
    }
    return <div>ERROR</div>;
  }
}

const mapStateToProps = state => ({
  finalData: state.finalFilterReducer.data,
  initialData: state.apiServiceReducer.data,
  isFetching: state.apiServiceReducer.isFetching,
  sucess: state.apiServiceReducer.sucess,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
