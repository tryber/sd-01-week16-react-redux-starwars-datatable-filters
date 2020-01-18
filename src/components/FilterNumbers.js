import React, { Component } from 'react';
import CreateFilterNumber from './CreateFilterNumber';
import { connect } from 'react-redux';

class FilterNumbers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: '',
      comparison: '',
      value: 0,
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
    this.setState({ value: value });
  }

  render() {
    const { column, comparison, value } = this.state;
    return (
      <div>
        <CreateFilterNumber
          changeValue={(value) => this.changeValue(value)}
          changeComparison={(value) => this.changeComparison(value)}
          changeColumn={(value) => this.changeColumn(value)}
          column={column}
          comparison={comparison}
          value={value}
        />
      </div>
    );
  };
};

const mapStateToProps = ({ planets }) => ({ planets });

export default connect(mapStateToProps)(FilterNumbers);
