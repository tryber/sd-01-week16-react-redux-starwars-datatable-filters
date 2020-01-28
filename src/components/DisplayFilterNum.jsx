import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ClearFilterButton from './DisplayFilterNum/ClearFilterButton';

class DisplayFilterNum extends Component {
  comparisonSing(Comparison_Sign) {
    switch (Comparison_Sign) {
      case 'greater':
        return 'maior que';
      case 'less':
        return 'menor que';
      case 'iqual':
        return 'igual a';
      default:
        return null;
    }
  }

  render() {
    const { add_filter } = this.props;
    return (
      <div>
        {add_filter.map((Each_Filter_Array, index) => (
          <div style={{'display': 'flex'}}>
            <p>{Each_Filter_Array.column} | {this.comparisonSing(Each_Filter_Array.comparison)} | {Each_Filter_Array.value} </p>
            <ClearFilterButton index={index} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({
  filters: { add_filter },
}) => ({
  add_filter,
});

DisplayFilterNum.propTypes = {
  add_filter: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }))
};

DisplayFilterNum.defaultProps = {
  add_filter: [],
};

export default connect(mapStateToProps)(DisplayFilterNum);
