import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar />
            <Container />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
