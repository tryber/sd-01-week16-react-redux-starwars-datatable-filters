import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterNumberComparison } from '../../actions/filters';

class ComparisonSign extends Component {
  render() {
    const { dispatchSomething } = this.props;
    return (
      <div>
        <div>
          <input
            type="radio" id="greater" name="sign" value="greater"
            onClick={(e) => dispatchSomething(filterNumberComparison, e.target.value)}
          />
          <label htmlFor="greater">Maior que</label>
        </div>
        <div>
          <input
            type="radio" id="less" name="sign" value="less"
            onClick={(e) => dispatchSomething(filterNumberComparison, e.target.value)}
          />
          <label htmlFor="less">Menor que</label>
        </div>
        <div>
          <input
            type="radio" id="iqual" name="sign" value="iqual"
            onClick={(e) => dispatchSomething(filterNumberComparison, e.target.value)}
          />
          <label htmlFor="iqual">Igual a</label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, column) => dispatch(callback(column)),
});

ComparisonSign.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ComparisonSign);
