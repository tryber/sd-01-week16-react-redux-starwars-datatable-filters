import React from 'react';
import { connect } from 'react-redux';
import { filterDropDown } from '../actions/filterDropDown';

function DropDown(props) {
  return (
    <>
      <select value={props.value} onChange={(e) => props.inputChange(e.target.value)}>
        <option value="population">POPULAÇÃO</option>
        <option value="orbital_period">DURAÇÃO DA ORBITA</option>
        <option value="diameter">DIÂMENTRO</option>
        <option value="rotation_period">DURAÇÃO DA ROTAÇÃO</option>
        <option value="surface_water">SUPERFÍCIE DE ÁGUA</option>
      </select>
    </>
  );
}

const mapStateToProps = ({ filterOfDropDown }) => ({
  inputDropDonw: filterOfDropDown.select,
});
const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(filterDropDown(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
