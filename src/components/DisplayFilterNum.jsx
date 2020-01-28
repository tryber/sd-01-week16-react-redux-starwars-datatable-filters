import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearOneFilter, modifyCategories } from '../actions/filters';

function comparisonSing(ComparisonSign) {
  switch (ComparisonSign) {
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

class DisplayFilterNum extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const { add_filter, dispatchSomething, available_categories } = this.props;
    const newNode = [...add_filter];
    newNode.splice(index, 1);
    dispatchSomething(clearOneFilter, newNode);
    const column = add_filter[index].column;
    const New_Node = [...available_categories, column];
    dispatchSomething(modifyCategories, New_Node);
  }

  render() {
    const { add_filter } = this.props;
    return (
      <div>
        {add_filter.map((Each_Filter_Array, index) => (
          <div style={{ 'display': 'flex' }}>
            <p>{Each_Filter_Array.column} | {comparisonSing(Each_Filter_Array.comparison)} | {Each_Filter_Array.value} </p>
            <button type="button" onClick={() => this.handleClick(index)}> X </button>
          </div>
        ))}
      </div>
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

DisplayFilterNum.propTypes = {
  add_filter: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  dispatchSomething: PropTypes.func.isRequired,
};

DisplayFilterNum.defaultProps = {
  add_filter: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilterNum);
