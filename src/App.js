import React from 'react';

import Table from './components/Table';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <p>
        Fazer a pesquisa no input em
        <strong> Caixa Baixa</strong>
      </p>
      <Table />
    </div>
  );
}

export default App;
