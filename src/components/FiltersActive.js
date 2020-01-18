import React from 'react';

import { connect } from 'react-redux';
import { removeFilter } from '../actions';


const saveFilter = ({ column, comparison, value }, index, removeFilters) => {
  const columnsProperties = {
    population: 'Populção',
    orbital_period: 'Periodo de Orbita',
    diameter: 'Diametro',
    rotation_period: 'Periodo de Rotação',
    surface_water: 'Superficie de Água',
  };

  return (
    <div key={index}>
      <p>
        {`${columnsProperties[column]}| ${comparison} | ${value} `}
      </p>
      <input type="button" value="X" onClick={() => removeFilters(index)} />
    </div>
  );
};

const FiltersActive = ({ filters, removesFilter }) => (
  <div>
    {filters && filters.map((filter, index) => saveFilter(filter, index, removesFilter))}
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  removesFilter: (index) => dispatch(removeFilter(index)),
});

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps, mapDispatchToProps)(FiltersActive);
