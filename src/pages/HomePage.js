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
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

var text = "The invasion of lionfish risks devastating marine life and coral ecosystems in the Atlantic and was named one of the top 15 threats to global diversity. They are decimating local reefs and consuming native species of fish: leading studies show lionfish invasion is responsible for reducing native species recruitment on occupied sites by nearly 80% and reducing overall native species biomass by over 60%."

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 0.0
    }
    autobind(this)
  }

  componentDidMount() {
    //setInterval(() => this.setState({opacity: this.state.opacity + 0.001}), 10)
  }

  render() {
    return (
      <div>
        <NavHeader/>

        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage 
            background={'url(/images/erin-simmons-382355.jpg)'}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
            <img src="/images/amrc-01.png" style={styles.logo} />
           
            <div style={styles.hline}/>
            <p style={styles.title}>
              Innovations for Healthy Oceans
            </p>
            <p style={styles.text}>
              At American Marine Research Company, we're revolutionizing the way we protect our oceans using interdisciplinary applications of data, technology and engineering.
            </p>
            <div style={styles.hline}/>
          </BackgroundImage>
        </Jumbotron>

        <div style={{
          ...styles.section2, 
          ...{ paddingLeft: '20vw', paddingRight: '20vw', paddingTop: '9vh', paddingBottom: '9vh'}
          }}>
          <div style={styles.hcap}/>

          <h1 style={styles.title}>
            {"The Lionfish Problem".toUpperCase()}
          </h1>

          <p style={styles.textLighter}>
            {"The invasion of lionfish risks devastating marine life and coral ecosystems in the Atlantic and was named one of the top 15 threats to global diversity. They are decimating local reefs and consuming native species of fish: leading studies show lionfish invasion is responsible for reducing native species recruitment on occupied sites by nearly 80% and reducing overall native species biomass by over 60%."}  
          </p>
          <p style={styles.textLighter}>
            Alarmingly, the only form of lionfish control that exists today is hunting in shallow water by human divers, but it is too limited by logistical and economic constraints to realistically offer a lasting solution to this problem.
          </p>
          <p style={styles.textLighter}>
            The lionfish invasion is a particularly concerning threat to Western Florida, as marine resources are critical to the region’s economic health: according to the NOAA, recreational fishing generated ~70,109 jobs and $7.5 billion in sales impacts in West Florida in 2014 alone.
          </p>

          <br/>
          <br/>

          <div style={styles.row}>
            <img src="/images/recreationalfishing-01.png" style={styles.logo} />
            <img src="/images/salesgauge-01.png" style={styles.logo} />
          </div>

        </div>

        <div style={styles.section3}>

          <div style={{...styles.column, ...{paddingLeft: '15vw'}}} >
            <div style={styles.hcap}/>

            <h1 style={{...styles.title, ...styles.justifyLeft}}>
              {"The Lionfish Problem".toUpperCase()}
            </h1>
            
            <p style={{...styles.textLighter, ...styles.justifyLeft}}>
              AMRC was founded out of the conviction that marine robotics could offer a promising approach for controlling invasive species in an economically sustainable way. 
            </p>
            <p style={{...styles.textLighter, ...styles.justifyLeft}}>
              Our mission is to create an agile and versatile underwater drone that can be used to capture lionfish populations at scale.
            </p>
            <p style={{...styles.textLighter, ...styles.justifyLeft}}>
              It was borne out of the observation that no other scalable method of lionfish capture currently exists that is capable of more than lionfish control – in other words, no method exists today that could solve the lionfish invasion once and for all.
            </p>
          </div>
          <div 
            style={{...styles.column, 
                    ...{
                      overflow: 'hidden',
                      justifyContent: 'center'
                    }}}>
            <img 
              src="/images/mathijs-vos-16905.jpg" 
              style={styles.lionfish} />
          </div>
        </div>

        <div style={{...styles.section2, ...{justifyContent: 'flex-end'}}}>
          <BackgroundImage 
            background={'url(/images/waves-01.png)'}
            backgroundColor={darkBlue(0.6)}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body2}}>

            <div style={{
              ...styles.row, 
              ...{
                  justifyContent: 'space-around', 
                  justifyContent: 'flex-end',
                  height: '80vh', 
                }}}>

              <div style={styles.smallCol}>
                <p style={styles.text}>
                  The potential economic impact of AMRC ROVs are massive. A rough calculations demonstrates that a single AMRC ROV catching lionfish at a rate of 30 fish per hour, operating a third of the year (120 days) for 10 hours, can capture 36,000 lionfish each year.
                </p>
              </div>

              <div style={styles.smallCol}>
                <p style={styles.text}>
                  Assuming that each lionfish consumes an ounce of biomass (flounder, red snapper etc.) daily, and each pound of biomass is conservatively worth $3 to the commercial charter boat industry, each drone alone could result in ~$2.5 million of available biomass.
                </p>
              </div>
            </div>

          </BackgroundImage>
        </div>

        <div style={styles.blueFooter}/>

        <Footer/>
      </div>
    );
  }
}


// <Grid>
//   <Row className="show-grid">
//    <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 6).join(' ')}</Col>
//    <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//    <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
//     <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 6).join(' ')}</Col>
//     <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 2).join(' ')}</Col>
//   </Row>
// </Grid>

const styles = {
  jumbotron: {
    height: '120vh',
    marginBottom: 0,
  },
  blueFooter: {
    backgroundColor: lightBlue(1),
    flex: 1,
    height: 120
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
  text: {
    color: White(0.8),
    fontSize: 14,
    marginTop: 30,
  },
  textLighter: {
    color: White(0.4),
    fontSize: 14,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: White(1),
    marginBottom: 10,
  },
  justifyLeft: {
    textAlign: 'start'
  },
  logo: {
    height: '40vh',
  },
  hline: {
    backgroundColor: White(0.8),
    width: '30vw',
    height: 1,
    margin: 20,
  },
  hcap: {
    marginTop: 5,
    width: 80,
    height: 10,
    flex: 0,
    display: 'flex',
    backgroundColor: White(1),
    marginBottom: 20,
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
    marginLeft: '3vw',
    marginRight: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lionfish: {
    flex: 1,
    width: '55vw'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: '20vw',
    paddingRight: '20vw'
  },
  body: {
    paddingLeft: '20vw',
    paddingRight: '20vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  }

}

