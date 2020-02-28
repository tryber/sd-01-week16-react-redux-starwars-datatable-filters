import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterName } from '../store/actions/filterName';

const FilterName = ({ filterNameTable, name }) => (
  <div>
    <input
      type="text"
      value={name}
      onChange={(event) => filterNameTable(event.target.value)}
    />
    Pesquise através do nome do Planeta
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filterNameTable: (text) => dispatch(filterName(text)),
});

const mapStateToProps = ({ filters: { name } }) => ({
  name,
});

FilterName.propTypes = {
  filterNameTable: PropTypes.func.isRequired,
  name: PropTypes.string,
};

FilterName.defaultProps = {
  name: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
