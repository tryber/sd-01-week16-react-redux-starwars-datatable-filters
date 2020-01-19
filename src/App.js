import React from 'react';
import './App.css';
import Table from './components/Table';
import TextInput from './components/TextInput';
import ValuesInput from './components/ValuesInput';

function App() {
  return (
    <div>
      <ValuesInput />
      <TextInput />
      <Table />
    </div>
  );
}

export default App;
