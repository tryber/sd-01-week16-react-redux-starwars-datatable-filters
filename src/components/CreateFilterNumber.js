import React from 'react';
import { connect } from 'react-redux';
import { addFilter } from '../actions';

const renderSelectFilter = (changeColumn, filters) => {
  const hideFilters = filters.map(filter => filter.column)
  return (
    <select onChange={(e) => changeColumn(e.target.value)}>
      <option value=""></option>
      {hideFilters.includes('population') || <option value="population">Populaçao</option>}
      {hideFilters.includes('orbital_period') || <option value="orbital_period">Duração da Orbita</option>}
      {hideFilters.includes('diameter') || <option value="diameter">Diametro</option>}
      {hideFilters.includes('rotation_period') || <option value="rotation_period">Duração da Rotação</option>}
      {hideFilters.includes('surface_water') || <option value="surface_water">Superficie de Água</option>}
    </select>
  )
}

const renderRadioButton = (value, changeComparison) => {
  return (
    <div>
      <input type="radio" checked={'Maior que' === value} name="comparison" value="Maior que" onClick={(e) => changeComparison(e.target.value)} /> Maior que
      <input type="radio" checked={'Menor que' === value} name="comparison" value="Menor que" onClick={(e) => changeComparison(e.target.value)} /> Menor que
      <input type="radio" checked={'Igual a' === value} name="comparison" value="Igual a" onClick={(e) => changeComparison(e.target.value)} /> Igual a
    </div>
  )
}

const renderInputNumber = (value, changeValue) => {
  return (
    <div>
      <label htmlFor="inputNumber">
        Números:
        <input id="inputNumber" value={value} type="number" onChange={(e) => changeValue(e.target.value)} />
      </label>
    </div>
  )
}

const sendFilter = (valueFilters, sendValues) => {
  const { column, comparison } = valueFilters;
  if (column !== '' && comparison !== '') return sendValues(valueFilters);
}

const renderButtonAdd = (column, value, comparison, sendValues) => {
  const obj = { column, value, comparison };
  return (
    <input id="inputNumber" type="button" value="Adicionar Filtro" onClick={() => sendFilter(obj, sendValues)} />
  )
}

const CreateFilterNumber = ({ column, comparison, value, changeValue, changeComparison, changeColumn, sendValues, filters }) => {
  if (filters.length === 5) return (<div><h2>Todos os Filtros já foram selecionados</h2></div>)
  return (
    <div>
      <div>
        {renderSelectFilter(changeColumn, filters)}
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

const mapStateToProps = ({
  filters,
}) => (
    {
      filters,
    }
  );


export default connect(mapStateToProps, mapDispatchToProps)(CreateFilterNumber);
