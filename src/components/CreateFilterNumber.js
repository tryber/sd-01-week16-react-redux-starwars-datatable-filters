import React from 'react';
import { connect } from 'react-redux';
import { addFilter } from '../actions';

const renderSelectFilter = (value, changeColumn) => {
  return (
    <select value={value} onChange={(e)=>changeColumn(e.target.value)}>
      <option value="population">Population</option>
      <option value="orbital_period">Orbital Period</option>
      <option value="diameter">Diameter</option>
      <option value="rotation_period">Rotation Period</option>
      <option value="surface_water">Surface Water</option>
    </select>
  )
}

const renderRadioButton = (value, changeComparison) => {
  return (
    <div>
      <input type="radio" checked={'Maior que' === value} name="comparison" value="Maior que" onClick={(e) => changeComparison(e.target.value)} /> Greater
      <input type="radio" checked={'Menor que' === value} name="comparison" value="Menor que" onClick={(e) => changeComparison(e.target.value)} /> Lesser
      <input type="radio" checked={'Igual a' === value} name="comparison" value="Igual a" onClick={(e) => changeComparison(e.target.value)} /> Equal
    </div>
  )
}

const renderInputNumber = (value, changeValue) => {
  return (
    <div>
      <label htmlFor="inputNumber">
        Numbers:
        <input id="inputNumber" value={value} type="number" onChange={(e) => changeValue(e.target.value)} />
      </label>
    </div>
  )
}

const sendFilter = (valueFilters, sendValues) => {
  const {column, comparison} = valueFilters;
  if(column !== '' && comparison !== '') return sendValues(valueFilters);
}

const renderButtonAdd = (column, value, comparison, sendValues) => {
  const obj = { column, value, comparison };
  return (
    <input id="inputNumber" type="button" value="Add Filter" onClick={() => sendFilter(obj, sendValues)} />
  )
}

const CreateFilterNumber = ({ column, comparison, value, changeValue, changeComparison, changeColumn, sendValues }) => {
  return (
    <div>
      <div>
        {renderSelectFilter(column, changeColumn)}
        {renderRadioButton(comparison, changeComparison)}
        {renderInputNumber(value, changeValue)}
        {renderButtonAdd(column, value, comparison, sendValues)}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  sendValues: (value) => dispatch(addFilter(value))
})

export default connect(null, mapDispatchToProps)(CreateFilterNumber);
