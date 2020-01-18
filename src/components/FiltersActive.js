import React from 'react';

import { connect } from 'react-redux';
import { removeFilter } from '../actions';


const saveFilter = ({ column, comparison, value }, index, removeFilter) => {
  const columnsProperties = {
    'population': 'Population',
    'orbital_period': 'Orbital Period',
    'diameter': 'Diameter',
    'rotation_period': 'Rotation Period',
    'surface_water': 'Surface Water',
  }

  return (
    <div key={index}>
      <p>
        {`${columnsProperties[column]}| ${comparison} | ${value} `}
      </p>
      <input type="button" value="X" onClick={()=>removeFilter(index)}/>
    </div>
  )
}

const FiltersActive = ({ filters, removeFilter }) => {
  return (
    <div>
      {filters && filters.map((filter, index) => saveFilter(filter, index, removeFilter))}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (index) => dispatch(removeFilter(index))
})

const mapStateToProps = ({
  filters,
}) => (
    {
      filters,
    }
  );

export default connect(mapStateToProps,mapDispatchToProps)(FiltersActive);
