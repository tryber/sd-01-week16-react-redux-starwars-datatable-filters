import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeColumn } from '../../actions/filters';

class ChooseColumn extends Component {
  render() {
    const { data, dispatchSomething } = this.props;
    if (data) {
      const categories = Object.keys(data[0]).filter((category) => category !== 'residents');
      return (
        <select key="order" onClick={(e) => dispatchSomething(changeColumn, e.target.value)}>
          {categories.map((EachCategory) =>
            <option value={EachCategory} selected >{EachCategory}</option>)}
        </select>
      );
    }
    return null;
  }
}

const mapStateToProps = ({
  database: { data },
}) => ({
  data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomething: (callback, text) => dispatch(callback(text)),
});

ChooseColumn.propTypes = {
  dispatchSomething: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

ChooseColumn.defaultProps = {
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseColumn);
