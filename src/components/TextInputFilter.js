import React from 'react';
import { connect } from 'react-redux';


const filterByName = (table, filterName) => {
  const filteredTable = table.filter(({ name }) => name.includes(filterName));
  return filteredTable;
};

const TextInputFilter = ({ dispatch }) => {
  const FILTER_BY_NAME = 'FILTER_BY_NAME';

  const defaultPlanets = JSON.parse(localStorage.getItem('planets'));

  const dispatchNameFilter = (event) => {
    const { target: { value: nameFilter } } = event;
    const filteredResults = filterByName(defaultPlanets, nameFilter);
    const actionFilter = () => ({ type: FILTER_BY_NAME, name: nameFilter, filteredResults });
    return dispatch(actionFilter());
  };

  return (
    <>
      <input type="text" onChange={(e) => dispatchNameFilter(e)} />
    </>
  );
};

export default connect()(TextInputFilter);
