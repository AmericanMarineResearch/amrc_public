// ResearchPage.js
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

import {
  Slider
} from "@blueprintjs/core";

import { __COMPONENT_STYLES__ } from '../global/Styles.js'
import { Black, darkBlue, lightBlue, lightGreen, lightRed, White } from '../global/Colors.js'
import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'
import SectionHeader from '../components/SectionHeader.js'
import HLine from '../components/HLine.js'
import NavFooter from '../components/NavFooter.js'
import { Bounce, Zoom, Fade, Slide as SlideReveal} from 'react-reveal';
import NextSectionCue from '../components/NextSectionCue.js'
import HBar from '../components/HBar.js'
import FishSimChart from '../components/FishSimChart.js';

import { LineChart, 
  Line, 
  AreaChart, 
  ComposedChart,
  Area, 
  Brush, 
  Legend,
  BarChart, 
  Tooltip, 
  CartesianGrid,
  ResponsiveContainer,
  XAxis, 
  YAxis, 
  Bar } from 'recharts'

import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import CodChart from '../components/CodChart.js';
import FishSim from '../components/FishSim.js'

const __COD_SERIES__ = require('../data/codseries.json')

// slices the __COD_SERIES__ by start and end years, inclusive bounds
function seriesSlice(series, start, end) {
  var outSeries = []
  for (var i = 0; i < series.length; i++) {
    var datum = series[i]
    if (series[i].year > end || series[i].year < start) {
      continue
    }
    outSeries.push(datum)
  }
  return outSeries
}

export default class ResearchPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NavHeader activeKey={'research'}/>

        <Fade bottom cascade>
          <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
            <BackgroundImage 
              pan={'pan8'}    
              contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.jumboContent}}>

              <div 
                style={{
                  flex: 1, 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <div style={{paddingTop: '20vh', marginBottom: 20}}>
                  <p style={styles.bigTitle}>
                    {"RESEARCH".toUpperCase()}
                  </p>
                  <HBar size={4} color={White(0.7)} />
                </div>
              </div>

              <div 
                style={styles.center}>
                <NextSectionCue
                  config="whitedown"
                  href="#ecology"
                  />
                
              </div>
              <br/>
              <br/>
            </BackgroundImage>
          </Jumbotron>
        </Fade>

        <BackgroundImage 
          pan={'still2'}    
          backgroundColor={Black(0.7)}
          background={'url(/images/diver-diving-swimming-sea-71276.jpeg)'}
          contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.collapseSection}}>
          <Fade bottom cascade>
            <div id="ecology">
              <br/>
              <br/>
              <HBar color={White(1)} size={4} />
              <br/>
              <h1 style={styles.h1}>
                {"Fishery Risk Mitigation".toUpperCase()}
              </h1>
              <p style={styles.p}>
                Due to dynamics around recruitment, mating, and harvest, fishery health assessment isn't as simple as monitoring adult populations. 
                In fact, without an understanding of population dynamics, it is impossible to understand the immediate risk invasive species and overfishing present to our ecosystems. 
                Data on landed seafood very seldom provides any useful information on fishery health until it is too late. 
                In this interactive report, we see the sequences of fishery collapse reflected in real historical data. 
              </p>
              <br/>
              <div
                style={{
                  flex: 8,
                  padding: 0,
                  margin: 0,
                  minHeight: '55vh',
                  maxHeight: '55vh',
                  minWidth: '100%',
                  alignItems: 'flex-start',
                  display: 'flex',
                }}>
                <FishSimChart data={__COD_SERIES__} />
              </div>
              <br/>
              <br/>
              <p style={styles.p}>
                Data Source: DFO. 2016. Stock Assessment of Northern Cod (NAFO Divs. 2J3KL) in 2016. DFO Can. Sci. Advis. Sec. Sci. Advis. Rep. 2016/026. 
              </p>  

              <div 
                style={styles.center}>
                <NextSectionCue
                  config="whitedown"
                  href="#recruitment"
                  />
              
              </div>
            </div>
          </Fade>
          <br/>
          <br/>
          <br/>
          <div id="recruitment"/>
          <br/>
          <br/>
          <br/>

          <Grid style={{ width: '100%'}}>  
            <Row>
              <Col sm={6} md={6} style={styles.col}>
                <div
                  style={{
                    flex: 8,
                    padding: 0,
                    minHeight: '60vh',
                    maxHeight: '100%',
                    minWidth: '45vw',
                    alignItems: 'flex-start',
                    display: 'flex',
                  }}>
                  <FishSimChart 
                    data={seriesSlice(__COD_SERIES__, 1960, 1998)}
                    keys={['abundance', 'recruits']}/>
                </div>
              </Col>
              <Col sm={6} md={6} style={{...styles.col, ...{paddingRight: '10vw',}}}>
                <HBar color={lightGreen(1)} sizse={4} />
                <br/>
                <h2 
                  style={{
                    ...styles.h2, 
                    ...{color: lightGreen(1)
                  }}}>
                  {"Recruitment".toUpperCase()}
                </h2>
                <br/>
                <p style={styles.p}>
                  As time to sexual maturity increases for a species, the greater the delay between recruitment and landing data. 
                  Although recruitment went into terminal decline between 1989 and 1992 (and had been in a steady decline since 1983), the Newfoundland cod economy would not see the results on their landings until a full 3 years later.
                  However, by the time the landings data came to reflect the state of fishery health, it was too late. 
                </p>

              </Col>

            </Row>
          </Grid>

          <Grid style={{ width: '100%'}}>  
            <Row>
              <Col sm={6} md={6} style={styles.col}>
                <SlideReveal left>
                  <div
                    style={{
                      flex: 8,
                      padding: 0,
                      minHeight: '60vh',
                      maxHeight: '100%',
                      minWidth: '45vw',
                      alignItems: 'flex-start',
                      display: 'flex',
                    }}>
                    <FishSimChart 
                      data={seriesSlice(__COD_SERIES__, 1960, 2005)}
                      keys={['recruits', 'biomass']}/>
                  </div>
                </SlideReveal>
              </Col>
              <Col sm={6} md={6} style={{...styles.col, ...{paddingRight: '10vw'}}}>
                <SlideReveal right>
                  <HBar color={lightBlue(1)} sizse={4} />
                  <br/>
                  <h2 
                    style={{
                      ...styles.h2, 
                      ...{color: lightBlue(1)
                    }}}>
                    {"Spawning Stock".toUpperCase()}
                  </h2>
                  <br/>
                  <p style={styles.p}>
                    The observed delay is easily explained by the impacts to spawning stock. 
                    In a healthy fishery, spawning stock levels should reach an asymptote as a function of various environmental factors. 
                    Reasonable harvesting levels will not substantially affect the spawning stock, and as long as the spawning stock maintains a given level, a fishery can recover. 
                    However, when the spawning stock reaches critical levels, it enters into a terminal decline. 
                    Subsequent generations of fish simply lack the density and age distribution to be able to reproduce effectively. 

                  </p>
                </SlideReveal>
              </Col>


            </Row>
          </Grid>

          <Grid style={{ width: '100%'}}>  
            <Row>
              <Col sm={6} md={6} style={styles.col}>
                <SlideReveal left>
                  <div
                    style={{
                      flex: 8,
                      padding: 0,
                      minHeight: '60vh',
                      maxHeight: '100%',
                      minWidth: '45vw',
                      alignItems: 'flex-start',
                      display: 'flex',
                    }}>
                    <FishSimChart 
                      data={seriesSlice(__COD_SERIES__, 1960, 2005)}
                      keys={['recruits', 'biomass', 'landings']}/>
                  </div>
                </SlideReveal>
              </Col>
              <Col sm={6} md={6} style={{...styles.col, ...{paddingRight: '10vw'}}}>
                <SlideReveal right>
                  <HBar color={lightRed(1)} sizse={4} />
                  <br/>
                  <h2 
                    style={{
                      ...styles.h2, 
                      ...{color: lightRed(1)
                    }}}>
                    {"Collapse".toUpperCase()}
                  </h2>
                  <br/>
                  <p style={styles.p}>
                    All debts come due. Once older generations of fish are exhausted, fisherman become fully exposed to the absence of adult fish that were the result of terminally low recruitment from the previous years.
                  </p>
                  <br/>
                  <p style={{...styles.p, ...{color: lightRed(1)}}}>
                    In Newfoundland, this resulted in the single largest layoff in Canadian history, whereby 40,000 fishermen lost their jobs in the span of one week. 
                    The moratorium--originally planned for 2 years--placed on what was once one of the world's great fisheries has been in place for over 14 years.
                  </p>
                </SlideReveal>

              </Col>

            </Row>
          </Grid>
          <br/>
          <br/>
          <div 
            style={styles.center}>
            <NextSectionCue
              config="whitedown"
              href="#technology"
              />
          
          </div>
          <br/>
          <br/>
        </BackgroundImage>

        <BackgroundImage  
          id="technology"
          background={'url(/images/mathijs-vos-16905.jpg)'}
          backgroundColor={Black(0.8)}
          contentStyle={{
            ...styles.simSection
          }}>
          <FishSim/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div style={styles.center}>
            <NextSectionCue href="#cv"/>
          </div>
        </BackgroundImage>

        <BackgroundImage 
          id='cv'
          background={'url(/images/waves-01.png)'}
          backgroundColor={Black(0.6)}
          contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body2}}>
          <Grid>           
            <Row className="show-grid">

              <Col sm={6} md={6} style={styles.smallCol}>
                <SlideReveal left>
                  <img src='/images/IMG_1698.PNG' style={styles.cv}/>
                  <br/>
                  <br/>
                  <HBar color={lightGreen(1)} />
                  <br/>
                  <h2 
                    style={{
                      ...styles.h2, 
                      ...{color: lightGreen(1)
                    }}}>
                    {"Computer Vision".toUpperCase()}
                  </h2>
                  <br/>
                  <p style={styles.p}>
                    Recent advances in convolutional neural networks have allowed us to achieve excellent precision in identifying lionfish. 
                    Type I error is virtually nonexistent while Type II eror remains below 5% out-of-sample.
                  </p>
                </SlideReveal>
              </Col>

              <Col sm={6} md={6} style={styles.smallCol}>
                <SlideReveal right>
                  <img src='/images/IMG_1699.PNG' style={styles.cv}/>
                  <br/>
                  <br/>
                  <HBar color={lightBlue(1)} />
                  <br/>
                  <h2 
                    style={{
                      ...styles.h2, 
                      ...{color: lightBlue(1)
                    }}}>
                    {"Benchmarking".toUpperCase()}
                  </h2>
                  <br/>
                  <p style={styles.p}>
                    The implications of computer-assisted operation are tremendous. 
                    By developing the requisite software for control systems, artificial intelligence, and data collection, AMRC unlocks the power of data and modeling long utilized in other fields and industries for scalable, safe, and precise marine resource protection.
                  </p>
                </SlideReveal>
              </Col>
            </Row>
          </Grid>
          

        </BackgroundImage>

        <NavFooter/>
        <Footer/>
      </div>
    );
  }
}

const styles = {
  cv: {
    maxHeight: '30vh',
    maxWidth: '100%',
    marginLeft: -5,
  },
  smallCol: {
    paddingLeft: '5vw',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '5vw',
    alignItems: 'flex-start',
  },
  h1: {
    color: White(1),
    letterSpacing: '2px',
    fontSize: 40,
    fontWeight: 600,
    textAlign: 'start',
    lineHeight: '110%',
  },
  h2: {
    color: White(1),
    letterSpacing: '2px',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'start'
  },
  h5: {
    color: White(1),
    letterSpacing: '2px',
    textAlign: 'start',
    fontWeight: 400,
  },
  p: {
    color: White(1),
    textAlign: 'start'
  },
  col: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  container: {
    alignItems: 'center',
    width: '100vw'
  },
  body2: {
    minHeight: '100vh'
  },
  collapseSection: {
    padding: '5vw',
    paddingTop: 30,
    paddingBottom: 70,
    flexDirection: 'column',
    width: '100vw'
  },
  simSection: {
    padding: '5vw',
    flexDirection: 'column',
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 70,
    width: '100vw'
  },
  section: {
    backgroundColor: White(1)
  },
  title: {
    fontSize: 30,
    color: lightGreen(1),
    letterSpacing: '2px',
    lineHeight: '110%',
    fontWeight: 600,
    marginBottom: 0,
  },
  line: {
    margin: 0
  },
  jumbotron: {
    height: '110vh',
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
    color: White(0.7),
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
