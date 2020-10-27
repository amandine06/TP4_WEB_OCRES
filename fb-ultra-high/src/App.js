/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

export default App;
*/

import React, { Component } from 'react';

class Profil extends React.Component {
  render() {
    return (
      <div className="profil">
        <h1>PHOTO</h1> 
        <h6>Prénom : </h6>
        <h6>Nom : </h6>
        <h6>Date de naissance : </h6>
        <button>Change style</button>
      </div>
    )
  }
}

class Interface extends React.Component {
  renderProfil(i) {
    return <Profil />
  }

  render() {
    return (
      <div className="interface">
        <h3>Mon navigateur</h3>
        <button>Jeanne</button>
        <button>Martine</button>
        <button>Claude</button>
      </div>
    )
  }

}

export default Interface;