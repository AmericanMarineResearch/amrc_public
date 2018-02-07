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

import { Overlay } from 'react-overlay';
import { __COMPONENT_STYLES__ } from '../global/Styles.js'
import { PrimaryColor, White } from '../global/Colors.js'

export default class NavHeader extends Component {
  render() {
    return (
      <div>
        <Navbar style={styles.container} staticTop >
          <Navbar.Header>
            <Navbar.Brand>

              <a style={styles.text} href="home">
                <img src="/images/amrc_secondary-01.png" style={styles.logo} />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight style={styles.nav}>

            <NavDropdown class="dropdown-menu pull-right" style={styles.dropdown} eventKey={3} title="About">
              <MenuItem style={styles.menuitem} href="mission" eventKey={3.1}>Mission</MenuItem>
              <MenuItem style={styles.menuitem} href="team" eventKey={3.2}>Team</MenuItem>
              <MenuItem style={styles.menuitem} href="sponsors" eventKey={3.3}>Sponsors</MenuItem>
            </NavDropdown>
            <NavDropdown style={styles.dropdown} eventKey={4} title="Research" id="nav-dropdown">
              <MenuItem style={styles.menuitem} href="blog" eventKey={4.1}>Blog</MenuItem>
              
              <MenuItem style={styles.menuitem} href="data" eventKey={4.2}>Data</MenuItem>
              <MenuItem style={styles.menuitem} href="ai" eventKey={4.3}>AI and Computer Vision</MenuItem>
              <MenuItem style={styles.menuitem} href="fisheries" eventKey={4.4}>Fisheries</MenuItem>
            </NavDropdown>

            <NavItem style={styles.menuitem} eventKey={5} href="careers">Careers</NavItem>
            <NavItem style={styles.menuitem} eventKey={6} href="sponsor">Sponsor</NavItem>
            <NavItem style={styles.menuitem} eventKey={7} href="contact">Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const styles = {
  text: {
    color: White(0.8),
  },
  logo: {
    height: 60,
  },
  menuitem: {
    fontColor: White(0.8),
  },
  nav: {  
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 20,
  },
  dropdown: {
    backgroundColor: White(0),
  },
  container: {
    backgroundColor: White(0),
    borderWidth: 0,
    paddingLeft: 0,
    paddingRight: 0,
    display: 'absolute',
    justifyContent: 'space-between'
  }
}