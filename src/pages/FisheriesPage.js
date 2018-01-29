// FisheriesPage.js
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

import { LineChart, 
  Line, 
  AreaChart, 
  Area, 
  Brush, 
  BarChart, 
  Tooltip, 
  CartesianGrid,
  ResponsiveContainer,
  XAxis, 
  YAxis, 
  Bar } from 'recharts'


import { __COMPONENT_STYLES__ } from '../global/Styles.js'

import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'
import SectionHeader from '../components/SectionHeader.js'
import HLine from '../components/HLine.js'
import { Black, White } from '../global/Colors.js'

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];


const reproductiveRateData = [
      {name: 'Lionfish', rate: 900},
      {name: 'Snapper', rate: 100},
      {name: 'Grouper', rate: 15},
      {name: 'Amberjack', rate: 120},
      {name: 'Trigger', rate: 150},
];

const viabilityData = [
      {name: 'Lionfish', rate: 300},
      {name: 'Snapper', rate: 100},
      {name: 'Grouper', rate: 15},
      {name: 'Amberjack', rate: 120},
      {name: 'Trigger', rate: 90},
];

const sequenceData = [
      {key: 2010, val: 300},
      {key: 2011, val: 100},
      {key: 2012, val: 15},
      {key: 2013, val: 120},
      {key: 2014, val: 90},
];


const text1 = "By 1992, when the cod catch was the lowest ever measured, the government was forced to close the fishery."

const text2 = "In what may be the biggest single lay-off in history, the moratorium put 40,000 people out of work in 5 Canadian provinces, and required a several billion dollar relief package to be disbursed to coastal communities."

const text3 = "In 1993 the moratorium, initially put in place for two years, was extended indefinitely. It is still in place 14 years later."

export default class FisheriesPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NavHeader/>

        <BackgroundImage contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.sectionContainer, ...{paddingTop: 40}}}>
          <p style={__COMPONENT_STYLES__.jumboSubtitle}>
            Reproductive Rates of Selected Species
          </p>
          <h2 style={__COMPONENT_STYLES__.titleText}>
            We Can't Keep Up
          </h2>
          <div style={{backgroundColor: 'white', width: '50%', height: 1, marginTop: 10, marginBottom: 10}}/>

          <div style={styles.rowSection}>
            <div style={styles.textBox}>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
            </div>
            <div style={styles.barChartContainer}>
              <ResponsiveContainer height={'100%'} minHeight={100} debounce={1}>
                <BarChart 
                  data={reproductiveRateData}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={White(0.8)} />
                  <XAxis 
                    stroke={White(0.8)}
                    dataKey="name" />
                  <YAxis 
                    stroke={White(0.8)}/>
                  <Tooltip />
                  <Bar dataKey="rate" fill={White(0.8)} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </BackgroundImage> 

        <div style={{...__COMPONENT_STYLES__.jumboContent, ...styles.sectionContainer}}>
          <p style={{...__COMPONENT_STYLES__.jumboSubtitleBlack, ...{color: 'black'}}}>
            Benchmarking Damages
          </p>
          <h2 style={{...__COMPONENT_STYLES__.titleText, ...{color: 'black'}}}>
            Unacceptable Consequences
          </h2>
          <div style={{backgroundColor: 'black', width: '50%', height: 1, marginTop: 10, marginBottom: 10}}/>
          <div style={styles.rowSection}>
            <div style={styles.barChartContainer}>
              <ResponsiveContainer height={'100%'}>
                <LineChart 
                  height={'100%'} 
                  data={sequenceData}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={Black(0.8)} />
                  <XAxis 
                    stroke={Black(0.8)}
                    dataKey="key" />
                  <YAxis 
                    stroke={Black(0.8)}/>
                  <Tooltip />
                  <Line 
                    type={'monotone'}
                    fill='rgba(0, 0, 0, 0.5)'
                    strokeWidth={3}
                    dataKey="val" 
                    stroke={Black(0.8)} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div style={{...styles.textBox, ...{flex: 2, marginLeft: 50}}}>
              <p style={{color: 'black', textAlign: 'left'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'black', textAlign: 'left'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'black', textAlign: 'left'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'black', textAlign: 'left'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
            </div>
          </div>
        </div>

        <BackgroundImage contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.sectionContainer}}>
          
          <h2 style={__COMPONENT_STYLES__.titleText}>
            Time to Maturity
          </h2>
          <div style={{backgroundColor: 'white', width: '50%', height: 1, marginTop: 10, marginBottom: 10}}/>

          <div style={styles.rowSection}>
            <div style={styles.textBox}>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
              <p style={{color: 'white', textAlign: 'right'}}>
                {dummySentences.slice(0, 6).join(' ')}
              </p>
            </div>
            <div style={styles.barChartContainer}>
              <ResponsiveContainer height={'100%'}>
                <BarChart 
                  height={'100%'} 
                  data={reproductiveRateData}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={White(0.8)} />
                  <XAxis 
                    stroke={White(0.8)}
                    dataKey="name" />
                  <YAxis 
                    stroke={White(0.8)}/>
                  <Tooltip />
                  <Bar dataKey="rate" fill={White(0.8)} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </BackgroundImage> 
        <Footer/>
      </div>
    );
  }
}

const styles = {
  container: {
    alignItems: 'stretch',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
    marginTop: 20,
    marginBottom: 20,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  jumbotron2: {
    height: 160,
    padding: 0,
  },
  grid: {
    alignItems: 'center',
  },
  barChartContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  textBox: {
    backgroundColor: White(0.0),
    display: 'flex',
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1
  },
  rowSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rowSection2: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  }
}
