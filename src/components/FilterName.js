import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterName } from '../store/actions/filterName';

const FilterName = ({ filterNameTable, filters }) => (
  <div>
    <input
      type="text"
      value={filters}
      onChange={(event) => filterNameTable(event.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filterNameTable: (text) => dispatch(filterName(text)),
});

const mapStateToProps = ({ filterName: { filters } }) => ({
  filters,
});

FilterName.propTypes = {
  filterNameTable: PropTypes.func.isRequired,
  filters: PropTypes.string,
};

FilterName.defaultProps = {
  filters: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
