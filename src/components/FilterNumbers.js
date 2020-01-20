import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateFilterNumber from './CreateFilterNumber';

class FilterNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '0',
    };

    this.changeColumn = this.changeColumn.bind(this);
    this.changeComparison = this.changeComparison.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeColumn(value) {
    this.setState({ column: value });
  }

  changeComparison(value) {
    this.setState({ comparison: value });
  }

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { column, comparison, value } = this.state;
    return (
      <div>
        <CreateFilterNumber
          changeValue={(newValue) => this.changeValue(newValue)}
          changeComparison={(newComparison) => this.changeComparison(newComparison)}
          changeColumn={(newColumn) => this.changeColumn(newColumn)}
          column={column}
          comparison={comparison}
          value={value}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ planets }) => ({ planets });

export default connect(mapStateToProps)(FilterNumbers);
