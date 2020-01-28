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
    const { addFilter, dispatchSomething, availableCategories } = this.props;
    const newNode = [...addFilter];
    newNode.splice(index, 1);
    dispatchSomething(clearOneFilter, newNode);
    const column = addFilter[index].column;
    const NewNode = [...availableCategories, column];
    dispatchSomething(modifyCategories, NewNode);
  }

  render() {
    const { addFilter } = this.props;
    return (
      <div>
        {addFilter.map((EachFilterArray, index) => (
          <div style={{ display: 'flex' }}>
            <p>
              {EachFilterArray.column} |
            {comparisonSing(EachFilterArray.comparison)} |
            {EachFilterArray.value}
            </p>
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
  addFilter: add_filter,
  availableCategories: available_categories,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, node) => dispatch(callback(node)),
});

DisplayFilterNum.propTypes = {
  addFilter: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
  })),
  dispatchSomething: PropTypes.func.isRequired,
  availableCategories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

DisplayFilterNum.defaultProps = {
  addFilter: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilterNum);
