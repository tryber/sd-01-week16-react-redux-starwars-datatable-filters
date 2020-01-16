import React from 'react';

import { connect } from 'react-redux';

const FilterName = () => {
  return (
    <div>
      <label for="filter-name">
        <input id="filter-name" type="text" />
      </label>
    </div>
  )
}

export default FilterName;
