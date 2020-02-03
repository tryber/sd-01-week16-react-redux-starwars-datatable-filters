import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetFilter, addFilter, modifyCategories } from '../../actions/filters';

class FilterButton extends Component {

  handleClick() {
    const { column, comparison, value, available_categories, dispatchSomething } = this.props;
    const newNode = {
      column,
      comparison,
      value,
    };
    dispatchSomething(addFilter, newNode);
    const NewNode = available_categories.filter((category) => category !== column);
    dispatchSomething(modifyCategories, NewNode);
    this.props.resetFilter();
  }

  render() {
    return (
      <button type="button" onClick={() => this.handleClick()}>
        Add Filter
      </button>
    );
  }
}

const mapStateToProps = ({
  filters: { numeric_values: {
    column,
    comparison,
    value,
  }, available_categories },
}) => ({
  column,
  comparison,
  value,
  available_categories,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, node) => dispatch(callback(node)),
  resetFilter: () => dispatch(resetFilter()),
});

FilterButton.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
  column: PropTypes.func.isRequired,
  comparison: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  available_categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
