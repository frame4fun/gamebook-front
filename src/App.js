import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Routing } from './Routing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routing />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
