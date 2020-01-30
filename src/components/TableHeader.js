import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortColumn } from '../actions';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'ASC',
      column: '',
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
  }

  changeOrder(title, column) {
    if (title === column) {
      this.setState((state) => ({
        order: (state.order === 'ASC') ? 'DESC' : 'ASC',
        column: title,
      }));
    } else {
      this.setState({
        order: 'DESC',
        column: title,
      });
    }
  }

  changeColumn(event) {
    const { order, column } = this.state;
    const { orderColumn } = this.props;
    const title = event.target.innerHTML;
    this.changeOrder(title, column);
    orderColumn({ column: title, order });
  }

  render() {
    const titles = [
      'name',
      'population',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'rotation_period',
      'surface_water',
      'films',
      'created',
      'edited',
      'link',
    ];

    return (
      <tr>
        {titles.map((title) => <th key={title} onClick={(e) => this.changeColumn(e)}>{title}</th>)}
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  orderColumn: (value) => dispatch(sortColumn(value)),
});

export default connect(null, mapDispatchToProps)(TableHeader);
