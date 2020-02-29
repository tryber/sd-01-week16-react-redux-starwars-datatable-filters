import React from 'react';

import Table from './components/Table';
import './App.css';
import Header from './components/Header';
import FiltersAll from './components/FiltersAll';

function App() {
  return (
    <div className="App">
      <Header />
      <FiltersAll />
      <p>Clique nos botões para ordenar a coluna por ordem crescente ou decrescente</p>
      <Table />
    </div>
  );
}

export default App;
