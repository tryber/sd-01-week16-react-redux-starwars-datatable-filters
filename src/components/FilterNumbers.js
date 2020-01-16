import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPlanets } from '../actions';


const renderSelectFilter = () => {
  return (
    <select>
      <option value="population">Population</option>
      <option value="orbital_period">Orbital Period</option>
      <option value="diameter">Diameter</option>
      <option value="rotation_period">Rotation Period</option>
      <option value="surface_water">Surface Water</option>
    </select>
  )
}


const renderRadioButton = () => {
  return (
    <div>
      <input type="radio" name="comparison" value="Maior que" /> Maior que
      <input type="radio" name="comparison" value="Menor que" /> Menor que
      <input type="radio" name="comparison" value="Igual a" /> Igual a
    </div>
  )
}

const renderInputNumber = () => {
  return (
    <div>
      <label for="inputNumber">
        Numeros:
        <input id="inputNumber" type="number" />
      </label>
    </div>
  )
}

const FilterNumbers = () => {
  return (
    <div>
      <div>
        {renderSelectFilter()}
        {renderRadioButton()}
        {renderInputNumber()}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets())
})

const mapStateToProps = ({ planets }) => ({ planets });

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumbers);
