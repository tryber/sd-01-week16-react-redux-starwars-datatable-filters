import React from 'react';
// import './App.css';

import Table from './components/Table';
import Filters from './components/Filters';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Table />
    </div>
  );
}

export default App;
