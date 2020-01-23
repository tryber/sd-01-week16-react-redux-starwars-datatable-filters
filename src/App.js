import React from 'react';
import './App.css';
import TextInput from './components/TextInput';
import ValuesInput from './components/ValuesInput';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Filters />
      <ValuesInput />
      <TextInput />
      <Table />
    </div>
  );
}

export default App;
