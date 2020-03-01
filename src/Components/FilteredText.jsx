import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilterText } from '../Actions/actions';
import '../Style/FilteredText.css';

class FilteredText extends Component {

  render() {
    const { changeFilterText } = this.props;

    return (
      <div>
        <input
          className="input-text"
          type="text"
          onChange={(e) => changeFilterText(e.target.value)}
          placeholder="Pesquise aqui"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeFilterText: (value) => dispatch(changeFilterText(value)),
});


export default connect(null, mapDispatchToProps)(FilteredText);
