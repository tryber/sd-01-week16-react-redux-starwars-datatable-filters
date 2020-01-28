import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeOrder } from '../../actions/filters';

class ChooseOrder extends Component {
  render() {
    const { dispatchSomething } = this.props;
    return (
      <div>
        <div>
          <input
            type="radio" id="ASC" name="order" value="ASC"
            onClick={(e) => dispatchSomething(changeOrder, e.target.value)}
            checked
          />
          <label htmlFor="ASC">Upward que</label>
        </div>
        <div>
          <input
            type="radio" id="DESC" name="order" value="DESC"
            onClick={(e) => dispatchSomething(changeOrder, e.target.value)}
          />
          <label htmlFor="DESC">Downward</label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, text) => dispatch(callback(text)),
});

ChooseOrder.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ChooseOrder);
