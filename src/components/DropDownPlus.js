import React from 'react';
import { connect } from 'react-redux';
import { filterDropDown } from '../actions/filterDropDown';

function DropDown(props) {
  return (
    <>
      <select value={props.value} onChange={(e) => props.inputChange(e.target.value)}>
        <option value="bigger">MAIOR QUE</option>
        <option value="smaller">MENOR QUE</option>
        <option value="equal">IGUAL Á</option>
        
      </select>
    </>
  );
}

const mapStateToProps = ({ filterOfDropPlus }) => ({
  inputDropDonw: filterOfDropPlus.select,
});
const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(filterDropDown(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
