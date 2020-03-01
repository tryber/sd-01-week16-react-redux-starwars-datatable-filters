import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilterText } from '../Actions/actions';
import '../Style/FilteredText.css';

class FilteredText extends Component {

  render() {
    const { changeFilterName } = this.props;

    return (
      <div>
        <input
          className="input-text"
          type="text"
          onChange={(e) => changeFilterName(e.target.value)}
          placeholder="Pesquise aqui"
        />
      </div>
    );
  }
}

FilteredText.propTypes = {
  changeFilterName: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changeFilterName: (value) => dispatch(changeFilterText(value)),
});


export default connect(null, mapDispatchToProps)(FilteredText);
