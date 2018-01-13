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
import PersonCard from '../components/PersonCard.js'

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

export default class TeamPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NavHeader/>

        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage contentStyle={__COMPONENT_STYLES__.jumboContent}>
            <p style={__COMPONENT_STYLES__.jumboSubtitle}>
              AMRC
            </p>
            <h1 style={__COMPONENT_STYLES__.jumboText}>
              Team
            </h1>
          </BackgroundImage>
        </Jumbotron>
        <Grid style={styles.grid}>
          <Row>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>

            <PersonCard/>
          </Row>
        </Grid>

        <Jumbotron style={styles.jumbotron2}> 
          <BackgroundImage contentStyle={__COMPONENT_STYLES__.jumboContent}>
            <p style={__COMPONENT_STYLES__.jumboSubtitle}>
              AMRC
            </p>
            <h1 style={__COMPONENT_STYLES__.jumboText}>
              Advisors
            </h1>
          </BackgroundImage>
        </Jumbotron>

        <Grid style={styles.grid}>
          <Row>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>

            <PersonCard/>
          </Row>
        </Grid>
        <Footer/>
      </div>
    );
  }
}



const styles = {
  container: {
    alignItems: 'center',
  },
  jumbotron: {
    height: '60vh'
  },
  jumbotron2: {
    height: 160,
    padding: 0,
  },
  grid: {
    alignItems: 'center',

  }
}
