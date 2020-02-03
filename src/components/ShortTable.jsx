import React, { Component } from 'react';
import { connect } from 'react-redux';

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
