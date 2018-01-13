// Footer.js
// Yuan Wang

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {  Button,
          Jumbotron,
          MenuItem,
          Image,
          Nav,
          NavDropdown,
          NavItem,
          Navbar, 
        } from 'react-bootstrap';

import { __COMPONENT_STYLES__ } from '../global/Styles.js'

export default class Footer extends Component {
  render() {
    return (
      <Jumbotron style={styles.jumbotron}>
        <p style={{...styles.footerText, ...styles.bold}}>
          {'AMRC - American Marine Research Company'}
        </p>
        <p style={styles.footerText}>
          {'Pensacola, FL'}
        </p>
        <p style={styles.footerText}>
          {'Copyright American Marine Research Company, LLC 2017'}
        </p>

      </Jumbotron>
    );
  }
}

const styles = {
  jumbotron: {
    marginBottom: -20,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItem: 'center,'
  },
  bold: {
    fontWeight: 600
  },
  footerText: {
    fontSize: 12,
    margin: 0
  }
}