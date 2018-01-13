// NavHeader.js
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

export default class NavHeader extends Component {
  render() {
    return (
      <Navbar style={styles.container} >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="home">American Marine Research Company</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>

          <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
            <MenuItem href="aboutus" eventKey={3.1}>Mission</MenuItem>
            <MenuItem href="team" eventKey={3.2}>Team</MenuItem>
            <MenuItem href="sponsors" eventKey={3.3}>Sponsors</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={4} title="Research" id="basic-nav-dropdown">
            <MenuItem href="blog" eventKey={4.1}>Blog</MenuItem>
            
            <MenuItem href="marinerobotics" eventKey={4.2}>Marine Robotics</MenuItem>
            <MenuItem href="fisheries" eventKey={4.4}>Fisheries</MenuItem>
          </NavDropdown>

          <NavItem eventKey={5} href="careers">Careers</NavItem>
          <NavItem eventKey={6} href="sponsor">Sponsor</NavItem>
          <NavItem eventKey={7} href="contact">Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const styles = {
  jumbotron: {
    height: '60vh'
  },
  container: {
  }
}