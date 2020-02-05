import React from 'react';
import PropTypes from 'prop-types';

function ComparisonFilterSelect({ handleChange }) {
  return (
    <select name="type" onChange={(e) => handleChange(e.target.value)}>
      <option selected disabled>Selecionar Opção</option>
      <option value="bigger">Maior que</option>
      <option value="less">Menor que</option>
      <option value="equal">Igual a</option>
    </select>
  );
}

ComparisonFilterSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ComparisonFilterSelect;
