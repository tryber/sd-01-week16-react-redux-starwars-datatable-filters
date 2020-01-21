import React from 'react';
import './App.css';

import Table from './components/Table';
import FilterByName from './components/FilterByName';

function App() {
  return (
    <div className="black-app">
      <FilterByName />
      <Table />
    </div>
  );
}

export default App;
