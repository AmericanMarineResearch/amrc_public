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
import NextSectionCue from './NextSectionCue.js'
import { Black, darkBlue, lightBlue, lightGreen, White } from '../global/Colors.js'

export default class Footer extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{...styles.col, ...styles.left}}>
          <p style={styles.footerText}>
            {"© American Marine Research Company"}
          </p>
        </div>
        <div style={{...styles.col, ...styles.center}}>
          <NextSectionCue config="whiteup" href={"#head"} />
        </div>

        <div style={styles.col}/>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: darkBlue(1),
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center,'
  },
  col: {
    flex: 1,
    display: 'flex',
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center'
  },
  bold: {
    fontWeight: 600
  },
  footerText: {
    fontWeight: 400,
    color: White(0.6),
    fontSize: 12,
    margin: 0
  }
}