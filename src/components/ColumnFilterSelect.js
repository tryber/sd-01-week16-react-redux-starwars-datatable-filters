import React from 'react';
import PropTypes from 'prop-types';

function ColumnFilterSelect({ handleChange }) {
  return (
    <select name="column" onChange={(e) => handleChange(e.target.value)}>
      <option value="">Selecionar Opção</option>
      <option value="population">População</option>
      <option value="orbital_period">Duração Orbital</option>
      <option value="diameter">Diâmetro</option>
      <option value="rotation_period">Duração da Rotação</option>
      <option value="surface_water">Superfície da Água</option>
    </select>
  );
}

ColumnFilterSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ColumnFilterSelect;
