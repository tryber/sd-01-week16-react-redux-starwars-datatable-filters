import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { inputNameUpdate } from '../actions/inputNameUpdate';

function Filter(props) {
  return (
    <div>
      <input
        value={props.inputValue}
        placeholder="Digite o nome do planeta aqui"
        onChange={(e) => props.inputChange(e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = ({ filterName }) => ({
  inputDropDown: filterName.name,
});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(inputNameUpdate(text)),
});

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
