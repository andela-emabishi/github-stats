import React, { Component } from 'react';
import GithubStats from './components/GithubStats/GithubStats';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to Github Stats</h2>
          <GithubStats />
      </div>
    );
  }
}

export default App;
