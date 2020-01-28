import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterText } from '../actions/filters';

class FilterText extends Component {
  render() {
    const { dispatchSomething } = this.props;
    return (
      <div>
        <h2>Filter Table By Text</h2>
        <input type="text" onChange={(e) => dispatchSomething(filterText, e.target.value)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, text) => dispatch(callback(text)),
});

FilterText.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterText);
