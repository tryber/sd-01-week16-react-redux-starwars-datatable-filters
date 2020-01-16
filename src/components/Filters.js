import React from 'react';

import { connect } from 'react-redux';
import FilterNumbers from './FilterNumbers';
import FilterName from './FilterName';

const Filters = () => {
  return (
    <div>
      <h2>Filter</h2>
      <FilterName />
      <h4>Filters Numbers</h4>
      <FilterNumbers />
    </div>
  )
}

export default Filters;
