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
        <tr>
          {arrayOfTags.map(tag => {
            return <th>{tag}</th>;
          })}
        </tr>
        {this.generateTableBody(data, arrayOfTags)}
      </table>
    );
  }

  generateTableBody(data, arrayOfTags) {
    return data.map(planet => {
      return (
        <tr>
          {arrayOfTags.map(tag => {
            return <td>{planet[tag]}</td>;
          })}
        </tr>
      );
    });
  }
  
  render() {
    if(this.props.isFetching) {
        return <p>LOADING...</p>
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
