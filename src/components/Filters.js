import React from 'react';

import FilterNumbers from './FilterNumbers';
import FilterName from './FilterName';
import FiltersActive from './FiltersActive';

const Filters = () => {
  return (
    <div>
      <h2>Filter</h2>
      <FilterName />
      <h4>Filters Numbers</h4>
      <FilterNumbers />
      <FiltersActive />
    </div>
  )
}

export default Filters;
