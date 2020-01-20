import React from 'react';
import './App.css';
import Table from './components/Table';
import { fetchAPI } from './components/Actions';

function App() {
  console.log(fetchAPI);
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
