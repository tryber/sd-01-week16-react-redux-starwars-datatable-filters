import React from 'react';
import { connect } from 'react-redux';
import textFilter from '../actions/textFilter';

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.props.changeNameInFilter(e.target.value)}
          placeholder="Nome"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.textFilterReducer.filters,
});

const mapDispatchToProps = (dispatch) => ({
  changeNameInFilter: (value) => dispatch(textFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
