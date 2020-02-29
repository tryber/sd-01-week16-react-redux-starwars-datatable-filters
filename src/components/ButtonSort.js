import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTable } from '../store/actions/buttonSort';

function changeOrder(event, orderTable) {
  const title = event.target.innerHTML;
  orderTable(title);
}

function TableHeader({ orderTable }) {
  const titles = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <thead>
      <tr>
        {titles.map((title) => (
          <th key={title}>
            <button type="button" onClick={(e) => changeOrder(e, orderTable)}>{title}</button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  orderTable: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  orderTable: (value) => dispatch(sortTable(value)),
});

export default connect(null, mapDispatchToProps)(TableHeader);
