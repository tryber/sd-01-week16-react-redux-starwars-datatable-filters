import React from "react";
import { connect } from "react-redux";
import { loadData } from "../actions/starWarsApi";
import "./table.css";

class Table extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  generateTableHead(data) {
    const arrayOfTags = Object.entries(data[0])
      .map(tag => tag[0])
      .filter(name => name !== "residents");
    return (
      <table>
        <thead>
          <tr>
            {arrayOfTags.map(tag => {
              return <th key={tag}>{tag}</th>;
            })}
          </tr>
        </thead>
        <tbody>{this.generateTableBody(data, arrayOfTags)}</tbody>
      </table>
    );
  }

  generateTableBody(data, arrayOfTags) {
    return data.map(planet => {
      return (
        <tr key={planet}>
          {arrayOfTags.map(tag => {
            return <td key={planet[tag]}>{planet[tag]}</td>;
          })}
        </tr>
      );
    });
  }

  render() {
    if (this.props.isFetching) {
      return <p>LOADING...</p>;
    }
    if (this.props.sucess) {
      return this.generateTableHead(this.props.data.results);
    }
    return <div>teste</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.apiServiceReducer.data,
    isFetching: state.apiServiceReducer.isFetching,
    sucess: state.apiServiceReducer.sucess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
