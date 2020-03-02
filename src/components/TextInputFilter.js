import React from 'react';
import { connect } from 'react-redux';


const filterByName = (table, filterName) => {
  const filteredTable = table.filter(({ name }) => name.includes(filterName));
  return filteredTable;
};

const TextInputFilter = ({ dispatch }) => {
  const FILTER_BY_NAME = 'FILTER_BY_NAME';
  const RESTORE_DEFAULT = 'RESTORE_DEFAULT';

  const defaultPlanets = JSON.parse(localStorage.getItem('planets'));
  const restoreDefault = () => ({ type: RESTORE_DEFAULT, defaultPlanets });

  const dispatchNameFilter = (event) => {
    const { target: { value: nameFilter } } = event;
    const filteredResults = filterByName(defaultPlanets, nameFilter);
    const actionFilter = () => ({ type: FILTER_BY_NAME, name: nameFilter, filteredResults });
    if (event.target.value === '') return dispatch(restoreDefault());
    return dispatch(actionFilter());
  };

  return (
    <>
      <input type="text" onChange={(e) => dispatchNameFilter(e)} />
    </>
  );
};

export default connect()(TextInputFilter);
