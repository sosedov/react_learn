import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Technologies from './components/Technologies'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

export default App;
