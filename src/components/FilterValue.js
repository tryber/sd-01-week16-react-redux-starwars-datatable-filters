import React from 'react';
import PropTypes from 'prop-types';

function FilterValue({ handleChange }) {
  return (
    <input
      type="number"
      placeholder="Filtrar por Valor"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

FilterValue.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default FilterValue;
