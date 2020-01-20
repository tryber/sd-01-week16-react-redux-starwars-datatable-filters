import React from 'react';
import './App.css';
import fetchAPI from './components/Actions';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
