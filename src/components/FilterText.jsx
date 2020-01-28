import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterText } from '../actions/filters';

class FilterText extends Component {
  render() {
    return (
      <div>
        <h2>Filter Table By Text</h2>
        <input type="text" onChange={(e) => this.props.filterText(e.target.value)} />
      </div>  
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterText: (text) => dispatch(filterText(text)),
});

FilterText.propTypes = {
  filterText: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterText);
