// App.js
// Yuan Wang

// ============== EXTERNAL DEPENDENCIES ==============

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Button,
          Clearfix,
          Col, 
          Grid,
          Jumbotron,
          MenuItem,
          Nav,
          NavDropdown,
          NavItem,
          Navbar, 
          Row } from 'react-bootstrap';


import Routes from './Routes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
