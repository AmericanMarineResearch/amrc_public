// NotFoundPage.js
// Yuan Wang

// ============== EXTERNAL DEPENDENCIES ==============

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {  Button, 
          Jumbotron,
          } from 'reactstrap'; 


export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>404 - Not Found</h1>
          <p>Reource not found</p>
          <p><Button bsStyle="primary" href='/'>Back</Button></p>
        </Jumbotron>       
      </div>
    );
  }
}
