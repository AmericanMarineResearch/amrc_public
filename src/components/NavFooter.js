// NavFooter.js
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
import HBar from './HBar.js'

const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];



export default class NavFooter extends Component {
  render() {
    return (
      <Grid style={styles.container}>
        <Row className="show-grid">
          <Col sm={2} md={2} style={styles.col}>
            <h5 style={styles.h5}>
              {"ABOUT"}
            </h5>
            <HBar 
              size={2} 
              color={lightBlue(1)} 
              style={{marginBottom: 18, marginTop: 8}}/>
            <a href={'home#problem'} style={styles.a}>
              <p style={styles.p}>
                The Lionfish Problem
              </p>
            </a>
            <a href={'news'} style={styles.a}>
              <p style={styles.p}>
                News
              </p>
            </a>
            <a href={'sponsor'} style={styles.a}>
              <p style={styles.p}>
                Sponsors and Endorsements
              </p>
            </a>

          </Col>

          <Col sm={2} md={2} style={styles.col}>
            <h5 style={styles.h5}>
              {"RESOURCES"}
            </h5>
            <HBar 
              size={2} 
              color={lightBlue(1)} 
              style={{marginBottom: 18, marginTop: 8}}/>
            <a href={'research#ecology'} style={styles.a}>
              <p style={styles.p}>
                Ecology
              </p>
            </a>
            <a href={'research#technology'} style={styles.a}>
              <p style={styles.p}>
                Technology
              </p>
            </a>

          </Col>

          <Col sm={2} md={2} style={styles.col}>
            <h5 style={styles.h5}>
              {"GET INVOLVED"}
            </h5>
            <HBar 
              size={2} 
              color={lightBlue(1)} 
              style={{marginBottom: 18, marginTop: 8}}/>

            <a href={'sponsor#join'} style={styles.a}>
              <p style={styles.p}>
                Sponsor
              </p>
            </a>
            <a href={'contact#careers'} style={styles.a}>
              <p style={styles.p}>
                Careers
              </p>
            </a>
            <a href={'contact'} style={styles.a}>
              <p style={styles.p}>
                Contact
              </p>
            </a>
          </Col>
          <Col sm={6} md={6} style={{...styles.col, ...styles.right}}>
            <img style={styles.logo} src="/images/amrc_secondary-01.png"/>
            <p style={styles.rightText}>{dummySentences.slice(0, 3).join(' ')}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Black(0.1),
    display: 'flex',
    flex: 1,
    width: '100vw',
    paddingTop: '3em',
    paddingBottom: '3em',
    paddingLeft: '5em',
    paddingRight: '5em',
  },
  col: {
    paddingTop: '1em',
    paddingBottom: '1em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end'
  },
  logo: {
    height: 120,
  },
  a: {
    textDecoration: 'none'
  },
  h5: {
    color: darkBlue(1),
    fontWeight: 400,
    letterSpacing: '3px',
    textAlign: 'start'
  },
  p: {
    fontColor: Black(0.3),
    fontWeight: 300,
    letterSpacing: '1.0px',
    textAlign: 'start'
  },
  rightText: {
    color: Black(0.0),
    textAlign: 'end'
  }
}
