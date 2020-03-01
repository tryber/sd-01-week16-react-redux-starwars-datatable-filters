import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Table from './components/Table';
import SWAPI from './services/SWAPI';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <SWAPI />
          <Table />
        </header>
      </Provider>
    </div>
  );
}

export default App;
