import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {  Button,
          Clearfix,
          Col, 
          Grid,
          Jumbotron,
          MenuItem,
          Nav,
          NavDropdown,
          NavItem,
          Navbar, 
          Row } from 'react-bootstrap';

import autobind from 'react-autobind'
import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import { __COMPONENT_STYLES__, } from '../global/Styles.js'
import BackgroundImage from '../components/BackgroundImage.js'
import { Black, darkBlue, lightBlue, lightGreen, White } from '../global/Colors.js'

let __PEOPLE__ = require('../data/people.json')

export default class ContactPage extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }


  render() {
    return (
      <div>
        <NavHeader activeKey={'contact'}/>

        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage 
            background={'url(/images/diver-diving-swimming-sea-71276.jpeg)'}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
            <h1 style={styles.bigTitle}>
              CONTACT
            </h1>
            <div style={styles.hcap}/>
            <h1 style={styles.text}>
              team@amrc.io
            </h1>
          </BackgroundImage>
        </Jumbotron>

        

        <Footer/>
      </div>
    );
  }
}



const styles = {
  jumbotron: {
    height: '120vh',
    marginBottom: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    height: 40,
    backgroundColor: 'green'
  },
  vline: {
    flex: 1,
    display: 'flex',
    marginTop: '3vw',
    maxWidth: 1,
    backgroundColor: Black(0.6)
  },
  blueFooter: {
    backgroundColor: lightBlue(1),
    flex: 0,
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '15vw',
    paddingRight: '15vw',
  },
  section2: {
    backgroundColor: darkBlue(1),
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  section3: {
    backgroundColor: Black(1),
    flex: 1,
    display: 'flex',
    alignItems: 'space-between',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100vw',
    paddingTop: '9vh',
    paddingBottom: '9vh'
  },  
  section4: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100vw',
    paddingTop: '4vh',
    paddingBottom: '4vh',
    paddingLeft: '15vw',
    paddingRight: '15vw'
  },
  text: {
    color: White(1),
    fontSize: 24,
    marginTop: 15,
    letterSpacing: '1.6px',
  },
  textBlack: {
    color: Black(0.6),
    fontSize: 14,
  },
  textLighter: {
    color: White(0.4),
    fontSize: 14,
    marginTop: 30,
  },
  bigTitle: {
    fontSize: 60,
    letterSpacing: '5px',
    fontWeight: 850,
    color: White(1)
  },
  title: {
    fontSize: 30,
    color: White(1),
    letterSpacing: '2px',
    fontWeight: 600,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    letterSpacing: '1.2px',
    fontWeight: 400,
    color: White(1)
  },
  justifyLeft: {
    textAlign: 'start'
  },
  logo: {
    height: '40vh',
  },
  handshake: {
    height: 70,
  },
  hline: {
    backgroundColor: White(0.8),
    width: '30vw',
    height: 1,
    margin: 20,
  },
  hcap: {
    marginTop: 5,
    minWidth: 88,
    minHeight: 5,
    maxWidth: 88,
    maxHeight: 5,
    flex: 1,
    display: 'flex',
    backgroundColor: White(1),
  },
  hcapGreen: {
    backgroundColor: 'r(63, 151, 142, 1)'
  },
  hcapBlue: {
    backgroundColor: 'r(20, 148, 201, 1)'
  },
  column: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '30vw',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  smallCol: {
    flexDirection: 'column',
    flex: 1,
    width: '30vw',
    margin: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  medCol: {
    flexDirection: 'column',
    flex: 1,
    margin: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lionfish: {
    flex: 1,
    width: '55vw'
  },
  row: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  body: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  body2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    height: 60
  }

}

