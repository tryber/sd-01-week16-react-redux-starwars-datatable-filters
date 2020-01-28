import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearOneFilter, modifyCategories } from '../../actions/filters';

class ClearFilterButton extends Component {
constructor(props) {
  super(props);

  this.handleClick = this.handleClick.bind(this);
}

  handleClick() {
    const { index, add_filter, dispatchSomething, available_categories } = this.props;
    const newNode = [...add_filter];
    newNode.splice(index, 1);
    dispatchSomething(clearOneFilter, newNode);
    const column = add_filter[index].column;
    const New_Node = [...available_categories, column];
    dispatchSomething(modifyCategories, New_Node);
  }

  render() {
    return (
      <button type="button" onClick={() => this.handleClick()}>
        X
      </button>
    );
  }
}

const mapStateToProps = ({
  filters: { add_filter, available_categories },
}) => ({
  add_filter,
  available_categories,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, node) => dispatch(callback(node)),
});

ClearFilterButton.propTypes = {
  add_filter: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  dispatchSomething: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

ClearFilterButton.defaultProps = {
  add_filter: [],
};


export default connect(mapStateToProps, mapDispatchToProps)(ClearFilterButton);
