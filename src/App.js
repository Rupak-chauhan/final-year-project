import React, { Component } from 'react';
import Header from './layout/Header';
import SignIn from './layout/SignIn';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <SignIn />
      </div>
    );
  }
}

export default App;
