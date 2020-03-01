import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Table from './Components/Table';
import FilteredText from './Components/FilteredText';
import FilteredNumber from './Components/FilteredNumber';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <header className="content-header">
        <FilteredText />
        <FilteredNumber />
      </header>
      <Table />
    </Provider>
  );
}

export default App;
