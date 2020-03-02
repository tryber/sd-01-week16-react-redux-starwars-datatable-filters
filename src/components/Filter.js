import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInput } from '../actions/updateInput';

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
  inputDropDonw: filterName.name,
});
const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(updateInput(text)),
});
Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
