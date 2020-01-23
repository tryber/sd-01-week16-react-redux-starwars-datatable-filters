import React from 'react';
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
const mapStateToProps = (state) => ({
  inputValue: state.updateInput.inputValue,
});
const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(updateInput(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
