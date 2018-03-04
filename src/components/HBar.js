// HBar.js
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
          Row } from 'react-bootstrap';

import { __COMPONENT_STYLES__ } from '../global/Styles.js'

import { Black, darkBlue, lightBlue, lightGreen, White } from '../global/Colors.js'

export default class HBar extends Component {
  render() {
    return (
      <div style={{
        ...styles.hcap,
        ...this.props.style,
        ...{
          backgroundColor: this.props.color,
          minWidth: 20 * this.props.size,
          minHeight: 4,
          maxWidth: 20 * this.props.size,
          maxHeight: 4,

        }
      }}/>
    );
  }
}

HBar.defaultProps = {
  size: 4,
  color: White(1),
  style: {marginTop: 0, marginBottom: 0},
}

const styles = {
  hcap: {
    flex: 0,
    display: 'flex',
  }
}
