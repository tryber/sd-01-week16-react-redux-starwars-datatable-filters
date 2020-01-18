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
    // for (let i = 0; i < arrayOfTags; i += 1) {
    //   return (
    //     <tr>
    //       {data[arrayOfTags[i]].map(prop => {
    //         return <td>{prop}</td>;
    //       })}
    //     </tr>
    //   );
    // }

    // return arrayOfTags.map(tag => {
    //   return (
    //     <tr>
    //       {data[tag].map(prop => {
    //         return <td>{prop}</td>;
    //       })}
    //     </tr>
    //   );
    // });
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
    if (this.props.sucess) {
      return this.generateTableHead(this.props.data.results);
    }
    return <div>teste</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    sucess: state.sucess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
