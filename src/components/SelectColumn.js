import React from 'react';
import { connect } from 'react-redux';
import { chooseColumnName } from '../actions/actionDropdown';

function SelectColumn({ column, inputChange }) {
  return (
    <div>
      <select value={column} onChange={(e) => inputChange(e.target.value)}>
        <option value="population">POPULAÇÃO</option>
        <option value="orbital_period">DURAÇÃO DA ORBITA</option>
        <option value="diameter">DIÂMENTRO</option>
        <option value="rotation_period">DURAÇÃO DA ROTAÇÃO</option>
        <option value="surface_water">SUPERFÍCIE DE ÁGUA</option>
      </select>
    </div>
  );
}

const mapStateToProps = ({ filter: { column } }) => ({
  column,
});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (column) => dispatch(chooseColumnName(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectColumn);
