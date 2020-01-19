import React, { Component } from 'react';

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
      filters: { name },
    } = this.props;
    return (
      <div>
        <textarea value={name} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Filter;
