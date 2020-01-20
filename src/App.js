import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';


import './App.css';

import Table from './components/Table';
import Filter from './components/Filter';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Filter />
        <Table />
      </Provider>
    );
  }
}

export default App;
