import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterNumberValue } from '../../actions/filters';

class NumberRange extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(e) => this.props.filterValue(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterValue: (value) => dispatch(filterNumberValue(value)),
});

NumberRange.propTypes = {
  filterValue: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NumberRange);
