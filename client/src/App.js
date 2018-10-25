import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WidgetsContainer from './components/WidgetsContainer/WidgetsContainer';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <WidgetsContainer/>
      </div>
    );
  }
}

export default App;
