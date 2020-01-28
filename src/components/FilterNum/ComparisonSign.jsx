import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterNumberComparison } from '../../actions/filters';

class ComparisonSign extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="radio" id="greater" name="sign" value="greater"
            onClick={(e) => this.props.filterComparison(e.target.value)}
          />
          <label htmlFor="greater">Maior que</label>
        </div>
        <div>
          <input
            type="radio" id="less" name="sign" value="less"
            onClick={(e) => this.props.filterComparison(e.target.value)}
          />
          <label htmlFor="less">Menor que</label>
        </div>
        <div>
          <input
            type="radio" id="iqual" name="sign" value="iqual"
            onClick={(e) => this.props.filterComparison(e.target.value)}
          />
          <label htmlFor="iqual">Igual a</label>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterComparison: (sign) => dispatch(filterNumberComparison(sign)),
});

ComparisonSign.propTypes = {
  filterComparison: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ComparisonSign);
