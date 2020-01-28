import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChooseColumn from './FilterNum/ChooseColumn';
import ComparisonSign from './FilterNum/ComparisonSign';
import NumberRange from './FilterNum/NumberRange';
import FilterButton from './FilterNum/FilterButton';

class FilterNum extends Component {
  render() {
    const { column, comparison, value } = this.props;
    return (
      <div>
        <h2>Filter Table By Number</h2>
        <ChooseColumn />
        {column !== '' && <ComparisonSign />}
        {comparison !== '' && <NumberRange />}
        {value !== '' && <FilterButton />}
      </div>
    );
  }
}

const mapStateToProps = ({
  filters: { numeric_values: {
    column,
    comparison,
    value,
  } },
}) => ({
  column,
  comparison,
  value,
});

FilterNum.propTypes = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
};

FilterNum.defaultProps = {
  column: '',
  comparison: '',
  value: '',
};

export default connect(mapStateToProps)(FilterNum);
