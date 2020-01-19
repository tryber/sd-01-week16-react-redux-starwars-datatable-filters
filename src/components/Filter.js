import React from 'react';
import { connect } from 'react-redux';

function Filter(props) {
  return (
    <div>
      <input
        value={props.inputValue}
        placeholder="Digite o nome do planeta aqui"
        onChange={props.inputChange}
      />
      <p>{props.inputValue}</p>
    </div>
  );
}

const UPDATE_INPUT = 'UPDATE_INPUT';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (e) => {
    const action = { type: UPDATE_INPUT, text: e.target.value };
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
