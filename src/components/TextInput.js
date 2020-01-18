import React from "react";
import { connect } from "react-redux";
import { textFilter } from "../actions/textFilter";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.props.changeNameInFilter(e.target.value)}
          placeholder="nome"
        />
        <p>{this.props.filter}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.textFilterReducer.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNameInFilter: () => dispatch(textFilter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
