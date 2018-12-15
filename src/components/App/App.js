import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
        </Router>
      </div>
    );
  }
}

export default App;
