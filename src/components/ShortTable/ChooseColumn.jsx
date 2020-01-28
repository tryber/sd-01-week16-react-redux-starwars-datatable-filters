import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeColumn } from '../../actions/filters';

class ChooseColumn extends Component {
  render() {
    const { dispatchSomething } = this.props;
    return (
      <select key="order" onClick={(e) => dispatchSomething(changeColumn, e.target.value)}>
        <option value="name" selected >Name</option>
        <option value="climate" >Climante</option>
        <option value="terrain" >Terrain</option>
      </select>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, text) => dispatch(callback(text)),
});

ChooseColumn.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ChooseColumn);
