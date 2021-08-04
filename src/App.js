import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
  return (
      <div className="App">
        <Header />
        <Nav />
        <Content state={props.state} addPost={props.addPost}/>
      </div>
  );
}

export default App;
