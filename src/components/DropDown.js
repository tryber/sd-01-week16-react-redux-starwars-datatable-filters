import React from 'react';
import { connect } from 'react-redux';
import { filterDropDown } from '../actions/filterDropDown';

function DropDown({value, inputChange}) {
  return (
    <div>
      <select value={value} onChange={(e) => inputChange(e.target.value)}>
        <option value="population">POPULAÇÃO</option>
        <option value="orbital_period">DURAÇÃO DA ORBITA</option>
        <option value="diameter">DIÂMENTRO</option>
        <option value="rotation_period">DURAÇÃO DA ROTAÇÃO</option>
        <option value="surface_water">SUPERFÍCIE DE ÁGUA</option>
      </select>
    </div>
  );
}

const mapStateToProps = ({ filterOfDropDown }) => ({
  value: filterOfDropDown.select,
});
const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(filterDropDown(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
