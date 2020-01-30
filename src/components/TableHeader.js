import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortColumn } from '../actions';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
      order: 'ASC',
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
  }

  changeOrder(title, column) {
    if (title === column) {
      this.setState((state) => ({
        column: title,
        order: (state.order === 'ASC') ? 'DESC' : 'ASC',
      }));
    } else {
      this.setState({
        column: title,
        order: 'DESC',
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
        {titles.map((title) => (
          <th key={title}>
            <button type="button" onClick={(e) => this.changeColumn(e)}>{title}</button>
          </th>
        ))}
      </tr>
    );
  }
}

TableHeader.propTypes = {
  orderColumn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  orderColumn: (value) => dispatch(sortColumn(value)),
});

export default connect(null, mapDispatchToProps)(TableHeader);
