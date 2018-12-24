import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Navbar />
            <Container />
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
