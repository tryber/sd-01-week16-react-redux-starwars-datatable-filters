import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterNumberValue } from '../../actions/filters';

class NumberRange extends Component {
  render() {
    const { dispatchSomething } = this.props;
    return (
      <div>
        <input
          type="number"
          onChange={(e) => dispatchSomething(filterNumberValue, e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, node) => dispatch(callback(node)),
});

NumberRange.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NumberRange);
