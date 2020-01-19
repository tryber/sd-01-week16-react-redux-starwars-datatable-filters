import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { updateInput } = this.props;
    updateInput(e.target.value);
  }

  render() {
    const {
      input: { txt = '' },
    } = this.props;
    return (
      <div>
        <textarea value={txt} onChange={this.handleChange} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
