import React, { Component } from 'react';
import 'rbx/index.css';
import { Hero, Title, Table as TB } from 'rbx';

// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';

export default class Table extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
        <Hero color='dark'>
          <Hero.Body>
            <Title>
              <Title>StarWars DataTB with Filters</Title>
            </Title>
          </Hero.Body>
        </Hero>
        <TB bordered>
          <TB.Head>
            <TB.Row>
              <TB.Heading>One</TB.Heading>
              <TB.Heading>Two</TB.Heading>
            </TB.Row>
          </TB.Head>
          <TB.Body>
            <TB.Row>
              <TB.Cell>Three</TB.Cell>
              <TB.Cell>Four</TB.Cell>
            </TB.Row>
          </TB.Body>
          <TB.Body>
            <TB.Row>
              <TB.Cell>Five</TB.Cell>
              <TB.Cell>Six</TB.Cell>
            </TB.Row>
          </TB.Body>
        </TB>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(TB);
