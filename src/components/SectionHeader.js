// SectionHeader.js
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

export default class SectionHeader extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

SectionHeader.defaultProps = {
	title: "Title"
}

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    width: '100vw',

  }
}