// SponsorPage.js
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

import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'
import SectionHeader from '../components/SectionHeader.js'
import HLine from '../components/HLine.js'

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

export default class SponsorPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NavHeader activeKey={'sponsor'}/>

        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage contentStyle={__COMPONENT_STYLES__.jumboContent}>
            <p style={__COMPONENT_STYLES__.jumboSubtitle}>
              
            </p>
            <h1 style={__COMPONENT_STYLES__.jumboText}>
              Sponsors
            </h1>
          </BackgroundImage>
        </Jumbotron>
        <div style={styles.center}>
          <h2 style={styles.line}>
            Our Benefactors
          </h2>
          <HLine style={styles.hline}/>
          <p style={styles.bottom}>
            Lorem ipsum
          </p>

          <h2 style={styles.line}>
            Sponsor Our Waters
          </h2>
          <HLine style={styles.hline}/>
          <p style={styles.bottom}>
            Lorem ipsum
          </p>

          
        </div>

        <Footer/>
      </div>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    width: '100vw'
  },
  line: {
    margin: 0
  },
  jumbotron: {
    height: '60vh'
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottom: {
    marginBottom: 40
  },
  hline: {
    width: '50%',
    marginTop: 10,
    marginBottom: 10,
  },
  jumbotron2: {
    height: 160,
    padding: 0,
  },
  grid: {
    alignItems: 'center',

  }
}
