import React from "react";
import { connect } from "react-redux";
import { loadData } from "../actions/starWarsApi";
import "./table.css";

class Table extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  generateTableHead(data) {
    if (data.length > 0) {
      const arrayOfTags = Object.entries(data[0])
        .map(tag => tag[0])
        .filter(name => name !== "residents");
      return (
        <table>
          <thead>
            <tr>
              {arrayOfTags.map(tag => {
                return <th key={`${tag}1`}>{tag}</th>;
              })}
            </tr>
          </thead>
          <tbody>{this.generateTableBody(data, arrayOfTags)}</tbody>
        </table>
      );
    } else {
      return <p>Planeta não encontrado</p>;
    }
  }

  generateTableBody(data, arrayOfTags) {
    return data.map(planet => {
      return (
        <tr key={planet.diameter}>
          {arrayOfTags.map(tag => {
            return <td key={tag}>{planet[tag]}</td>;
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
      if(this.props.finalData) {
        return this.generateTableHead(this.props.finalData)
      }
      return this.generateTableHead(this.props.initialData.results);
    }
    return <div>ERROR</div>;
  }
}

const mapStateToProps = state => {
  return {
    finalData: state.finalFilterReducer.data,
    initialData: state.apiServiceReducer.data,
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
