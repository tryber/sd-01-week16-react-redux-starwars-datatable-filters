import React from 'react';
import { connect } from 'react-redux';
import { placeAnInput } from '../actions/actionDropdown';


function ValueInput({ value, inputChange }) {
  return (
    <form onChange={(e) => inputChange(e.target.value)}>
      <input type="number" value={value} />
    </form>
  );
}

const mapStateToProps = ({ filter: { value } }) => ({
  value,
});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (value) => dispatch(placeAnInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ValueInput)
