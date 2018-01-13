// AccessDeniedPage.js
// Yuan Wang

// ============== EXTERNAL DEPENDENCIES ==============

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {  Button, 
          Jumbotron,
          } from 'reactstrap'; 
import { __COMPONENT_STYLES__ } from '../global/Styles.js'

import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'
import PersonCard from '../components/PersonCard.js'

export default class AccessDeniedPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Access Denied</h1>
          <p>Reource not available.</p>
          <p><Button bsStyle="primary" href='/'>Back</Button></p>
        </Jumbotron>       
      </div>
    );
  }
}
