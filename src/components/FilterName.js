import React from 'react';

import { connect } from 'react-redux';
import { addFilterName } from '../actions';

const FilterName = ({ changeFilterName, filters }) => {

  return (
    <div>
      <label for="filter-name">
        <input id="filter-name" type="text" value={filters} onChange={(e)=>changeFilterName(e.target.value)}/>
      </label>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeFilterName: (value) => dispatch(addFilterName(value))
})

const mapStateToProps = ({
  filtersName:{ filters },
}) => (
    {
      filters,
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
