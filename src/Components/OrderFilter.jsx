import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderColumn } from '../Actions/actions';

function changeOrder(event, ordernedColumn) {
  const title = event.target.innerHTML;
  ordernedColumn(title);
}

function TableHeader({ ordernedColumn }) {
  const titles = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'rotation_period',
    'surface_water',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <tr>
      {titles.map((title) => (
        <th key={title}>
          <button type="button" onClick={(e) => changeOrder(e, ordernedColumn)}>{title}</button>
        </th>
      ))}
    </tr>
  );
}

TableHeader.propTypes = {
  ordernedColumn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  ordernedColumn: (value) => dispatch(orderColumn(value)),
});

export default connect(null, mapDispatchToProps)(TableHeader);
