import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilterName } from '../actions';

const FilterName = ({ changeFilterName, filters }) => (
  <div>
    <label htmlFor="filter-name">
      <input
        id="filter-name"
        type="text"
        value={filters}
        onChange={(e) => changeFilterName(e.target.value)}
      />
    </label>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  changeFilterName: (value) => dispatch(addFilterName(value)),
});

const mapStateToProps = ({ filtersName: { filters } }) => ({ filters });

FilterName.propTypes = {
  changeFilterName: PropTypes.func.isRequired,
  filters: PropTypes.string,
};

FilterName.defaultProps = {
  filters: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
