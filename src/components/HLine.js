// HLine.js
// Yuan Wang


import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {  Button,
          Clearfix,
          Col, 
          Grid,
          Jumbotron,
          MenuItem,
          Image,
          Nav,
          NavDropdown,
          NavItem,
          Navbar, 
          Row } from 'react-bootstrap';

import { __COMPONENT_STYLES__ } from '../global/Styles.js'


import BackgroundImage from '../components/BackgroundImage.js'

export default class HLine extends Component {
  render() {
    return (
      <div style={{...styles.container, ...this.props.style}}/>
    );
  }
}

HLine.defaultProps = {
  style: {
    width: '50%'
  }
}

const styles = {
  container: {
    alignItems: 'center',
    flex: 0,
    backgroundColor: 'black',
    height: 1,
  }
}