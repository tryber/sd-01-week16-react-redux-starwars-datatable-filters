import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterNumberColumn } from '../../actions/filters';

class ChooseColumn extends Component {
  renderContent() {
    const { available_categories, dispatchSomething } = this.props;
    if (available_categories.length >= 1) {
      return (
        <select
          key="categories" onChange={(e) => {
            if (e.target.value !== 'none') {
              dispatchSomething(filterNumberColumn, e.target.value);
            }
          }}
        >
          <option value="none" >Choose Column</option>
          {available_categories.map((category) => (
            <option key={category} value={category} >{category}</option>
          ))}
        </select>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({
  filters: { available_categories },
}) => ({
  available_categories,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, column) => dispatch(callback(column)),
});

ChooseColumn.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
  available_categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseColumn);
