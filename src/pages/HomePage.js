import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {  
  Button,
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
import FooterContactForm from '../components/FooterContactForm.js'
import NavFooter from '../components/NavFooter.js'
// var {SparkScroll, SparkProxy, sparkScrollFactory} =
//   require('react-spark-scroll/spark-scroll-rekapi')({
//     invalidateAutomatically: true
//   });
import NextSectionCue from '../components/NextSectionCue.js'
import { Bounce, Zoom, Fade, Slide} from 'react-reveal';

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

var text = "The invasion of lionfish risks devastating marine life and coral ecosystems in the Atlantic and was named one of the top 15 threats to global diversity. They are decimating local reefs and consuming native species of fish: leading studies show lionfish invasion is responsible for reducing native species recruitment on occupied sites by nearly 80% and reducing overall native species biomass by over 60%."


class HoverBox extends Component {
  render() {
    return (  
       <div 
        class="box"
        >
        {this.props.children}
      </div>
    )
  }
}


export default class HomePage extends Component {
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
        <Fade>
        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage 
            pan={'pan8'}
            backgroundColor={Black(0.3)}
            background={'url(/images/erin-simmons-382355.jpg)'}
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
                <div style={{paddingTop: '10vh', marginBottom: 20}}>
                  <p style={styles.bigTitle}>
                    {"Innovations for Healthy Oceans".toUpperCase()}
                  </p>

                  <div style={styles.hcap}/>
                </div>
              </div>

              <div 
                style={styles.center}>
                <NextSectionCue
                  config="whitedown"
                  href="#problem"
                  />
              </div>
            </Fade>

          </BackgroundImage>
        </Jumbotron>
        </Fade>

        <Fade cascade bottom>
        <div id="problem"
          style={{
            ...styles.section2, 
            ...{ paddingTop: '9vh', paddingBottom: '5em'}
          }}>

            
            <div style={styles.hcap}/>
            <h1
              style={styles.title}>
              {"THE LIONFISH PROBLEM "}
            </h1>

            <div style={{paddingLeft: '20vw', paddingRight: '20vw'}}>
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
            </div>

            <Grid style={{...styles.row, ...{ paddingLeft: '5vw', paddingRight: '5vw', paddingBottom: '2em'}}}>
              <Row> 
                <Col sm={6} md={6}>
                  <img src="/images/recreationalfishing-01.png" style={styles.logo} />
                </Col>
                <Col sm={6} md={6}>
                  <img src="/images/salesgauge-01.png" style={styles.logo} />
                </Col>

              </Row>
            </Grid>
            
            <NextSectionCue href='#smarter' style={{marginTop: 20}}/>
        </div>
        </Fade>

        <div id="smarter" style={styles.section3}>
          <div style={{
            ...styles.row,
            ...{ 
              paddingTop: '9vh',
              paddingBottom: 0,
              paddingLeft: '10vw',
              width: '90vw',
              alignItems: 'space-between'
             } 
            }}>
            <Fade cascade bottom>
              <Grid>
                <Row className="show-grid">
                  <Col 
                    sm={6} md={6}
                    style={styles.col}
                    >
                    
                    <div style={styles.hcap}/>

                    <h1 style={{...styles.title, ...styles.justifyLeft}}>
                      {"WORKING SMARTER"}
                    </h1>
                    
                    <p style={{...styles.textLighter, ...styles.justifyLeft}}>
                      AMRC was founded out of the conviction that marine data and artificial intelligence could offer promising insights for controlling invasive species in an economically sustainable way. 
                    </p>
                    <p style={{...styles.textLighter, ...styles.justifyLeft}}>
                      Our mission is to data-driven methods for lionfish control, using sophistiacted technologies from a wide range of domains to advance invasive species control research.
                    </p>
                    <p style={{...styles.textLighter, ...styles.justifyLeft}}>
                      It was borne out of the observation that the fishing community suffers from insufficient coordination and lack of trust among peers. Our data and softare driven solutions seek to change that.
                    </p>
                    
                  </Col>
                  <Col 
                    sm={6} md={6}
                    style={{
                            ...{

                              justifyContent: 'center'
                            }}}>
                    <Slide right>
                      <img 
                        src="/images/mathijs-vos-16905.jpg" 
                        style={styles.lionfish} />
                    </Slide>
                  </Col>
                </Row>
              </Grid>
            </Fade>
          </div>
          <div style={styles.center}>
            <NextSectionCue href='#grid'/>
          </div>
          <br/>
          <br/>
        </div>

        <div 
          id="grid" 
          style={{...styles.section2, ...{justifyContent: 'center', height: '100vh'}}}>
          <BackgroundImage 
            background={'url(/images/waves-01.png)'}
            backgroundColor={darkBlue(0.6)}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body2}}>
            <Grid>           
              <Row className="show-grid">

                <Col sm={6} md={6} style={styles.smallCol}>
                  <Slide left>

                    <div style={{...styles.hcap, ...styles.hcapGreen}}/>
                    <p style={styles.text}>
                      The potential economic impact of lionfish threatens the charter boating, commercial fishing, tourism, and seafood wholesale industries. Charter fishing along generates over $14 billion in economic activity for western Florida.
                    </p>
                  </Slide>
                </Col>

                <Col sm={6} md={6} style={styles.smallCol}>
                  <Slide right>
                    <div style={{...styles.hcap, ...styles.hcapBlue}}/>
                    <p style={styles.text}>
                      Assuming that each lionfish consumes an ounce of biomass (flounder, red snapper etc.) daily, and each pound of biomass is conservatively worth $3 to the commercial charter boat industry, each lionfish removal could result in $70 of conserved commercially harvestable biomass.
                    </p>
                  </Slide>
                </Col>
              </Row>
            </Grid>
            <br/>
            <br/>
            <div style={styles.center}>
              <NextSectionCue href="#commit"/>
            </div>
            <br/>

          </BackgroundImage>
        </div>

        <div id="commit" style={styles.blueFooter}>
          <Fade bottom>
            <p style={{...styles.text, ...{fontWeight: 500}}}>
              We are currently focusing our research in Escambia County, Okaloosa County and Santa Rosa County, with the vision of tackling lionfish infestations plaguing the entire Gulf Coast and beyond.
            </p>
          </Fade>
        </div>

        <div style={styles.section4}>
          <Fade bottom>
            <img src="/images/handshake.png" style={styles.handshake} />
            <h2 style={{...styles.textBlack, ...styles.title, ...{color: lightBlue(1)}}}>
              OUR COMMITMENT
            </h2>
          </Fade>
          <br/>
          <div style={{ 
              ...{
                  justifyContent: 'center', 
                  alignItems: 'stretch',
                  flexDirection: 'row',
                  flex: 1,
                  display: 'flex',
                }}}>
            <Grid>           
              <Row className="show-grid">

                <Col sm={6} md={6} style={styles.smallCol}>
                  <Slide cascade left>
                    <div style={styles.medCol}>
                    
                      <h2 style={{...styles.subtitle, ...styles.justifyLeft}}>
                        ENVIRONMENTAL RESPONSIBILITY
                      </h2>
                      <p style={{...styles.textBlack, ...styles.justifyLeft}}>
                        To ensure the responsible use of our technology, for purposes that best protect and preserve the long-term health of the natural environment.
                      </p>
                      <p style={{...styles.textBlack, ...styles.justifyLeft}}>
                        To partner with non-profits and the academic community in tackling the major environmental problems plaguing the area.
                      </p>
                      <p style={{...styles.textBlack, ...styles.justifyLeft}}>
                        To remain transparent with our actions and accountable to the local community.
                      </p>
                    
                    </div>
                  </Slide>
                </Col>
                <Col sm={6} md={6} style={styles.smallCol}>
                  <Slide cascade right>
                    <div style={{...styles.medCol, ...{borderColor: Black(0.6), borderLeftWidth: 1}}}>
                    
                      <h2 style={{...styles.subtitle, ...styles.justifyLeft}}>
                        ECONOMIC DEVELOPMENT
                      </h2>
                      <p style={{...styles.textBlack, ...styles.justifyLeft}}>
                        To employ local Floridians and providing them with training and experience to develop into highly skilled talent, as demonstrated by the fact that half our team consists of proud Pensacola locals.
                      </p>
                      <p style={{...styles.textBlack, ...styles.justifyLeft}}>
                        To invest in high school and university students by providing educational opportunities to learn about and work in marine biology, data science, and business, as well as mentorship to budding entrepreneurs.
                      </p>
                      <p style={{...styles.textBlack, ...styles.justifyLeft}}>
                        To work with local fishing and charter boat communities in improving the quality of fish stocks.
                      </p>
                   
                    </div>
                  </Slide>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
        <NavFooter/>
        <Footer/>
      </div>
    );
  }
}


const styles = {
  jumbotron: {
    height: '105vh',
    marginBottom: 0,
    justifyContent: 'flex-end',
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
    width: '100vw'
  },
  section3: {
    backgroundColor: Black(1),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100vw',
  },  
  section4: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100vw',
    paddingTop: '8vh',
    paddingBottom: '8vh',
    paddingLeft: '15vw',
    paddingRight: '15vw'
  },
  text: {
    wordBreak: 'keep-all',
    color: White(0.8),
    fontSize: 14,
    marginTop: 30,
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
    wordBreak: 'keep-all',
    fontSize: '10vw',
    color: White(1),
    letterSpacing: '110%',
    fontWeight: 600,
    marginBottom: 10,
    textAlign: 'start',
    lineHeight: '94%',
  },
  title: {
    wordBreak: 'keep-all',
    overflowWrap: 'normal',
    fontSize: 30,
    color: White(1),
    letterSpacing: '2px',
    fontWeight: 600,
    marginBottom: 10,
  },
  subtitle: {
    wordBreak: 'keep-all',
    fontSize: 20,
    letterSpacing: '1.2px',
    fontWeight: 600,
    color: lightBlue(1)
  },
  justifyLeft: {
    textAlign: 'start'
  },
  logo: {
    margin: '3vw',
    width: '90%',
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
    flex: 0,
    display: 'flex',
    backgroundColor: White(1),
  },
  hcapGreen: {
    backgroundColor: 'rgba(63, 151, 142, 1)',
    marginBottom: -10
  },
  hcapBlue: {
    backgroundColor: 'rgba(20, 148, 201, 1)',
    marginBottom: -10
  },
  column: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '30vw',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sinker: {
    justifyContent: 'flex-start',
    display: 'flex',
    flex: 1,
  },
  smallCol: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
    padding: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  medCol: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: '3vw',
    marginRight: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lionfish: {
    flex: 1,
    width: '55vw',
    marginTop: '2vh',
    marginBottom: 40
  },
  col: {
    paddingLeft: '5vw',
  },
  row: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  body: {
    paddingLeft: '20vw',
    paddingRight: '20vw',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  body2: {
    paddingBottom: 55,
    alignItems: 'center',
    width: '100vw'
  },
  arrow: {
    height: 55,
    width: 55
  },
  center: {
    flex: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

