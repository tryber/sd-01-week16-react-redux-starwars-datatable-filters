import React from 'react';
import './App.css';
import loadingAPI from './components/API';
import Table from './components/Table';

function App() {
  console.log(loadingAPI);
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
