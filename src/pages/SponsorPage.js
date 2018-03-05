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
import { Black, darkBlue, lightBlue, lightGreen, White } from '../global/Colors.js'
import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'
import SectionHeader from '../components/SectionHeader.js'
import HLine from '../components/HLine.js'
import NavFooter from '../components/NavFooter.js'
import { Bounce, Zoom, Fade, Slide as SlideReveal} from 'react-reveal';
import NextSectionCue from '../components/NextSectionCue.js'
import HBar from '../components/HBar.js'
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];
let __SPONSORS__ = require('../data/sponsors.json')

class SponsorCard extends Component {

  render() {
    return (
      <div 
        class='box5'
        style={sponsorCardStyles.container}> 
        <div style={sponsorCardStyles.imageContainer}>
          <img src={this.props.image} style={sponsorCardStyles.image} />
        </div>
        <h2 style={sponsorCardStyles.name}>
          {this.props.name}
        </h2>
        <HBar size={4} color={lightBlue(1)}/>

      </div>
    )
  }
}

SponsorCard.defaultProps = {
  name: "Sponsor Name",
  image: '/images/amrc-01.png'
}

let sponsorCardStyles = {
  imageContainer: {
    minHeight: 150,
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: White(0),
    alignItems: 'flex-start',
    margin: 60,
    marginTop: 20,
  },
  name: {
    textAlign: 'start',
    color: lightBlue(1)
  },
  image: {
    width: '100%',

  }
}

export default class SponsorPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NavHeader activeKey={'sponsor'}/>

        <Fade>
          <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
            <BackgroundImage 
              pan={'pan8'}   
              backgroundColor={Black(0.4)}
              background={'url(images/naomi-tamar-323716.jpg)'} 
              contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.jumboContent}}>

              <Fade bottom cascade>
                <div 
                  style={{
                    flex: 1, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingLeft: 8,
                    paddingRight: '20vw',
                  }}>
                  <div style={{paddingTop: '30vh', marginBottom: 20}}>
                    <p style={styles.bigTitle}>
                      {"Thank You".toUpperCase()}
                    </p>
                    <p style={styles.subtitle}>
                      {"To our amazing companions in this journey"}
                    </p>
                    <br/>
                    <HBar size={4} color={White(0.7)} />
                  </div>
                </div>

                <div 
                  style={styles.center}>
                  <NextSectionCue
                    config="whitedown"
                    href="#sponsors"
                    />
                  
                </div>
                <br/>
                <br/>
              </Fade>
            </BackgroundImage>
          </Jumbotron>
        </Fade>

        <div 
          style={styles.section}
          id="sponsors">

          <br/>
          <br/>

          <div 
            style={{
              ...styles.center,
              ...{ 
                flexDirection: 'column' 
              }}}>
            <HBar size={4} color={lightGreen(1)} />
            <h1 style={styles.title}>
              SPONSORS
            </h1>
          </div>

          <Grid style={{width: '100vw', paddingLeft: 20, paddingRight: 20, backgroundColor: White(0)}}>
            <Row className="show-grid">
              { 
                __SPONSORS__.map((item, index) => 
                  <Col sm={4} md={4} key={index}>
                    <SponsorCard {...item} />
                  </Col>
                )
              }
            </Row>
          </Grid>
        </div>

        <NavFooter/>
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
  section: {
    backgroundColor: White(1)
  },
  title: {
    fontSize: 30,
    color: lightGreen(1),
    letterSpacing: '2px',
    fontWeight: 600,
    marginBottom: 0,
  },
  line: {
    margin: 0
  },
  jumbotron: {
    height: '100vh',
    marginBottom: 0,
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bigTitle: {
    wordBreak: 'keep-all',
    fontSize: '8vw',
    color: White(1),
    letterSpacing: '0.7vw',
    fontWeight: 600,
    marginBottom: 10,
    textAlign: 'start',
    lineHeight: '94%',
  },
  subtitle: {
    wordBreak: 'keep-all',
    fontSize: 30,
    color: White(0.7),
    letterSpacing: '110%',
    fontWeight: 400,
    marginBottom: 10,
    textAlign: 'start',
    lineHeight: '94%',
  },
  jumboContent: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    display: 'flex',
    paddingTop: '30vh',
    paddingBottom: 40,
  },
  bottom: {
    marginBottom: 40
  },
  body: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  hline: {
    width: '50%',
    marginTop: 10,
    marginBottom: 10,
  },
  center: {
    flex: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
