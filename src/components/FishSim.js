// FishSim.js
// Yuan Wang

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import gaussian from 'gaussian'
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
import FishSimChart from '../components/FishSimChart.js';

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

let __OFFSET__ = 3
let __SMOOTH__  = 1.1
var distribution = gaussian(5, 2);
var distribution2 = gaussian(0.25, 0.05);

function dataGen(maturity, recruitment) {
  var data = []

  var abundance = 100
  var recruits = 70
  var biomass = 60
  var landings = 100

  for (var i = 0; i < 45; i++) {
    var recruitmentFactor = 1 - (recruitment) + __OFFSET__ / (maturity)

    if (i > __OFFSET__) {
      recruits = recruits * (recruitmentFactor )
    }

    if (i > maturity + __OFFSET__) { 
      biomass = biomass * (recruitmentFactor )
      abundance = abundance * (recruitmentFactor )
    }

    if (i > maturity + __OFFSET__ + 2) {
      var lagged = data[i - (maturity + __OFFSET__)].recruits
      landings =  lagged * 1.4
    }

    recruits = Math.min(70, recruits)
    abundance = Math.min(100, landings, abundance)
    biomass = Math.min(60, biomass)
    landings = Math.min(100, landings)

    data.push({
      year: 2010 + i,
      abundance: Math.max(3 + distribution.ppf(Math.random()), abundance + distribution.ppf(Math.random()) * 0.1), 
      recruits: Math.max(3 + distribution.ppf(Math.random()), recruits + distribution.ppf(Math.random())),
      ssb: Math.max(3 + distribution.ppf(Math.random()), biomass + distribution.ppf(Math.random())), 
      landings: Math.max(3 + distribution.ppf(Math.random()), landings + distribution.ppf(Math.random())), 
    })
  }
  return data

}


export default class FishSim extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maturity: 10,
      recruitment: 50
    }
  }
  render() {
    return (
      <div style={{}}>
        <br/>
        <br/>
        <Grid>  
          <Row>

            <Col sm={6} md={6} 
              style={{
                ...styles.col, 
                ...{
                  paddingLeft: '5vw',
                  paddingRight: '5vw',
                  alignItems: 'flex-end'
                }
              }}>
              <SlideReveal left>
                <HBar color={White(1)} size={4} />
                <br/>
                <h1 style={{...styles.h1, ...{textAlign: 'end'}}}>
                  {"Simulating the Gulf".toUpperCase()}
                </h1>
                <br/>
                <p style={{...styles.p, ...{textAlign: 'end'}}}>
                  We present you now with a tool to visualize the delays to observable impact on landings. 
                  For Atlantic cod, a 2 to 3 year delay came of the time to peak sexual maturity. 
                  For Vermillion Snapper, peak sexual maturity is not reached until the 10th year. 
                </p>
                <br/>
                <p style={{...styles.p, ...{textAlign: 'end'}}}>
                  Usage: Select properties of your native species and of your invasive species, then scroll down to see simulated population dynamics models.
                </p>
                <br/>

                <h5 style={{...styles.h5, ...{textAlign: 'end', color: lightBlue(1)}}}>
                  {"Known Inputs: Time to Maturity".toUpperCase()}
                </h5>
                <HBar color={lightBlue(1)} size={4} />
                <br/>
                <h1 style={{...styles.h1, ...{textAlign: 'end', color: lightBlue(1)}}}>
                  {this.state.maturity + ' YEARS'}
                </h1>
                <br/>

                <h5 style={{...styles.h5, ...{textAlign: 'end', color: lightBlue(1)}}}>
                  {"Vermillion Snapper: 8 years".toUpperCase()}
                </h5>
                <h5 style={{...styles.h5, ...{textAlign: 'end', color: lightBlue(1)}}}>
                  {"Goliath Grouper: 14 years".toUpperCase()}
                </h5>

                <br/>
                <br/>
                <br/>
                <h5 style={{...styles.h5, ...{textAlign: 'end', color: lightGreen(1)}}}>
                  {"Known Inputs: Recruitment Impact".toUpperCase()}
                </h5>
                <HBar color={lightGreen(1)} size={4} />
                <br/>


                <h1 style={{...styles.h1, ...{textAlign: 'end', color: lightGreen(1)}}}>
                  {this.state.recruitment + '%'}
                </h1>
                <br/>

                <h5 style={{...styles.h5, ...{textAlign: 'end', color: lightGreen(1)}}}>
                  {"Studied Average: 90%".toUpperCase()}
                </h5>
                <h5 style={{...styles.h5, ...{textAlign: 'end', color: lightGreen(1)}}}>
                  {"Protected Reefs: 30%".toUpperCase()}
                </h5>


              </SlideReveal>

            </Col>
            <Col sm={6} md={6} 
              style={{
                ...styles.col,
                ...{
                  alignItems: 'flex-start'
                }}}>
              <SlideReveal right>
                <div style={{width: '80%'}}>
                  <HBar color={lightBlue(1)} size={4} />
                  <br/>
                  <h5 style={{...styles.h5, ...{color: lightBlue(1)}}}>
                    Time to Peak Sexual Maturity (Years)
                  </h5>
                  <p style={styles.p}>
                    As we saw in the earlier case study, the time it takes for a fish to reach peak sexual maturity is effectively a time delay on detecting fishery collapsed. 
                    In the case of long delays--as is the case with some of the Gulf's most beloved species--entire generations may collapse before the data reflects the fact.
                  </p>
                  <br/>
                  <Slider 
                    min={1}
                    max={25}
                    stepSize={1}
                    onChange={(maturity) => this.setState({maturity})}
                    value={this.state.maturity}
                    vertical={false} />
                  
                  <br/>
                  <br/>
                  <HBar color={lightGreen(1)} size={4} />
                  <br/>
                  <h5 style={{...styles.h5, ...{color: lightGreen(1)}}}>
                    Recruitment Impact
                  </h5>
                  <p style={styles.p}>
                    Fish reproduction depends heavily on the ability for populations to recruit additional young members who can reproduce quickly. 
                    As a result, be it aggressive fishermen or an invasive species, the insatiable appetites of an uncontrolled actor has a direct impact on recruitment.
                    Recruitment impact expresses the degree to which a foreign actor reduces the rate of reproduction of our favored species.
                  </p>
                  <br/>

                  <Slider 
                    min={0}
                    max={100}
                    stepSize={1}
                    onChange={(recruitment) => this.setState({recruitment})}
                    value={this.state.recruitment}
                    vertical={false} />
                </div>
              </SlideReveal>
            </Col>

          </Row>
        </Grid>
        
        <br/>
        <br/>
        <br/>
        <div
          id="simchart"
          style={{
            flex: 8,
            padding: 0,
            margin: 0,
            minHeight: '60vh',
            maxHeight: '60vh',
            minWidth: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
          }}>

          <FishSimChart 
            minHeight="60vh"
            data={dataGen(this.state.maturity, this.state.recruitment / 100.0)}
            keys={['recruits', 'biomass', 'landings', 'abundance']}/>
        </div>
      </div>
    )
  }
}

const styles = {
  h1: {
    color: White(1),
    letterSpacing: '2px',
    fontSize: 40,
    fontWeight: 600,
    textAlign: 'start'
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
    height: '100vh'
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