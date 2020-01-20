import React from 'react';
import PropTypes from 'prop-types';
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

FiltersActive.propTypes = {
  filters: PropTypes.shape([{
    value: PropTypes.number,
    column: PropTypes.string,
    comparison: PropTypes.string,
  }]).isRequired,
  value: PropTypes.number,
  column: PropTypes.string,
  comparison: PropTypes.string,
  removesFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersActive);
