import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterText } from '../actions/filters';
import ChooseOrder from './ShortTable/ChooseOrder';
import ChooseColumn from './ShortTable/ChooseColumn';

class ShortTable extends Component {
  render() {
    return (
      <div>
        <h2>Short Table</h2>
        <ChooseColumn />
        <ChooseOrder />
      </div>
    );
  }
}



export default connect()(ShortTable);
