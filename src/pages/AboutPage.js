import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {  Button,
          Carousel,
          Clearfix,
          Col, 
          Glyphicon,
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
import { Bounce, Zoom, Fade, Slide as SlideReveal} from 'react-reveal';
import SlickSlider from 'react-slick'
import { CarouselProvider, Dot, DotGroup, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ScrollArea from 'react-scrollbar'
// import Carousel from 'react-flex-carousel'

let __PEOPLE__ = require('../data/people.json')
let __ADVISORS__ = require('../data/advisors.json')


var __SLIDER_SETTINGS__ = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  vertical: false,
  arrows: true,
  slidesToScroll: 1
};

export default class AboutPage extends Component {
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
        <NavHeader activeKey={'about'}/>
        <Fade>
          <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
            <BackgroundImage 
              pan={'pan8'}
              background={'url(/images/diver-diving-swimming-sea-71276.jpeg)'}
              contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
            </BackgroundImage>
          </Jumbotron>
        </Fade>

        <div style={styles.section4}>
          <Fade bottom>
            <h1 style={styles.bigTitle}>
              WHO WE ARE
            </h1>
            <a 
              href='#team'
              onClick={() => console.log("Pressed")}>
              <img 
                src={'/images/arrow.png'} style={styles.arrow} />
            </a>
          </Fade>
        </div>

        <div id="team">
          <BackgroundImage 
            background={'url(/images/pexels-photo-260551.jpeg)'}
            pan={"still2"}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
            <Fade bottom>
              <h2 style={styles.subtitle}>
                THE TEAM
              </h2>
              <div style={styles.hcap}/>
            </Fade>

            {
            __PEOPLE__.map((item, index) => {
              return  <SlideReveal 
                        key={index} 
                        left={index % 2 == 0} 
                        right={index % 2 == 1}>
                        <TeamMemberCard
                          name={item.name}
                          title={item.title}
                          image={item.headshot}
                          bio={item.bio}
                          arrangement={index % 2}
                        />
                      </SlideReveal>
              })
            }
            
          </BackgroundImage>
        </div>

        <div style={{
          flexDirection: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: "column"
        }}>
         <h2 style={{...styles.subtitle, ...{color: darkBlue(1)} }}>
            ADVISORS
          </h2>
          <div style={{...styles.hcap, ...{backgroundColor: darkBlue(1)} }}/>
        </div>



        <div style={styles.section5}>
          <Carousel
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            nextIcon={
              <img src={'images/rightarrow.png'} style={styles.smallArrow}/>
            }
            prevIcon={
              <img src={'images/left_arrow.png'} style={styles.smallArrow}/>
            }

            indicators={false}
            controls={true}
            >
              { 
                __ADVISORS__.map((item, index) => 
                  <Carousel.Item key={index} >
                    <AdvisorCard {...item} />
                  </Carousel.Item>
                )
              }
          </Carousel>
        </div>

        <Footer/>
      </div>
    );
  }
}


let __ADVISOR_CARD_HEIGHT__ = '80vh'

class AdvisorCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: Math.random()
    }
    autobind(this)
  }

  onHover() {
  }


  renderHeadshotColumn() {
    if (false) {
      return (
        <div  
        key={'headshot'}
        style={
            { ...advisorCardStyles.col,  
              ...{
                flex: 1
              }
            }
          }>
        <img src={this.props.headshot} style={advisorCardStyles.headshot} />

      </div>

      )
    }

    return (
      <div  
        key={'headshot'}
        style={
            { ...advisorCardStyles.col,  
              ...{
                maxHeight: __ADVISOR_CARD_HEIGHT__,
                backgroundImage: 'url(' + this.props.headshot + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
              }
            }
          }>

      </div>
    )
  }

  renderBioColumn() {

    return (
      <div 
        key={'bio'}
        style={{
          ...advisorCardStyles.col, 
          ...{
            backgroundColor: White(1),
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            flex: 1,
            display: 'flex'
          }
        }}>

        <div style={{...styles.hcap, ...{backgroundColor: lightGreen(1)}}}/>
        <h3 style={advisorCardStyles.name}>
          {this.props.name}
        </h3>
        <h4 style={advisorCardStyles.position}>
          {this.props.title}
        </h4>
        <br/>
        <ScrollArea 
          stopScrollPropagation={true}
          style={{maxHeight: '70vh', paddingRight: 15,}}>
        
          <p style={advisorCardStyles.bio}>
            {this.props.bio}
          </p>
        </ScrollArea>
      </div>
    )
  }

  render() {
    var columns = [this.renderHeadshotColumn(), this.renderBioColumn(), ]
    
    if (false) {
      return (
        <img 
          style={{heigth: 400, width: 400}}
          src={"/images/amrc-01.png"}/>
      )
    }

    return (
      <div style={advisorCardStyles.container}>
        {columns}
      </div>
    )
  }
}

AdvisorCard.defaultProps = {
  image: '/images/amrc-01.png',
  name: "STEVE GITTINGS, PhD",
  position: "Chief Scientist, NOAA of National Marine Sanctuaries",
  bio: "Steve is rad",
  arrangement: 0
}

const advisorCardStyles = {
  container: {
    flex: 1,
    display: 'flex',
    minHeight: __ADVISOR_CARD_HEIGHT__,
    alignItems: 'flex',
    maxHeight: __ADVISOR_CARD_HEIGHT__,
    paddingLeft: 100,
    paddingRight: 100,
    margin: 2,
  },
  col: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  bio: {
    color: Black(0.6),
    fontSize: 14,
    textAlign: 'start',
    textOverflow: 'hidden'
  },
  name: {
    marginTop: 8,
    fontSize: 24,
    letterSpacing: '1.2px',
    fontWeight: 600,
    textAlign: 'start',
    color: lightGreen(1),
    marginBottom: -2,
  },
  headshot: {

  },
  position: {
    fontSize: 18,
    letterSpacing: '1px',
    fontWeight: 400,
    textAlign: 'start',
    color: Black(0.6)
  },
}

class TeamMemberCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
    autobind(this)
  }

  onHover() {
    this.setState({
      opacity: 1.0
    })
  }

  renderHeadshotColumn() {
    return (
      <div  
        key={'headshot'}
        style={
            { ...teamCardStyles.col,  
              ...{
                backgroundImage: 'url(' + this.props.image + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
              }
            }
          }>

      </div>
    )
  }

  renderNameColumn() {
    return (
      <div  
        key={'name'}
        style={{...teamCardStyles.col2, ...teamCardStyles.column}}>
        <div style={teamCardStyles.blueCap} />
        <h3 style={teamCardStyles.name}>
          {this.props.name}
        </h3>
        <h4 style={teamCardStyles.position}>
          {this.props.title}
        </h4>
      </div>
    )
  }

  renderBioColumn() {
    return (
      <div 
        key={'bio'}
        style={{...teamCardStyles.col3, ...teamCardStyles.column}}>
        <p style={teamCardStyles.bio}>
          {this.props.bio}
        </p>
      </div>
    )
  }

  render() {
    var columns = []
    if (this.props.arrangement == 0) {
      columns = [this.renderHeadshotColumn(), this.renderNameColumn(), this.renderBioColumn()]
    }
    else {
      columns = [this.renderBioColumn(), this.renderNameColumn(), this.renderHeadshotColumn()]
    }


    return (
      <div 
        style={{...teamCardStyles.container, ...{opacity: this.state.opacity}}} 
        onClick={this.onHover} >
        <Fade>
          {columns}
        </Fade>
      </div>
    )
  }
}

//<BackgroundImage 
//            background={'url(' + this.props.image + ')'}
//            pan={'still'}
//            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
//          </BackgroundImage>

TeamMemberCard.defaultProps = {
  name: 'Rachel Hogue',
  title: "Chief Designer",
  bio: 'Rachel is a rockstart designer.',
  image: '/images/amrc-01.png',
  arrangement: 0
}

const teamCardStyles = {
  container: {
    backgroundColor: White(1),
    flex: 1,
    display: 'flex',
    margin: 20,
    minHeight: 360,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  column: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  col: {
    display: 'flex',
    flex: 1,
    backgroundColor: Black(0.1)
  },
  col2: {
    flex: 1,
    backgroundColor: White(1)
  },
  col3: {
    flex: 2,
    backgroundColor: Black(0.1)
  },
  blueCap: {
    width: 88,
    maxHeight: 8,
    flex: 1,
    display: 'flex',
    backgroundColor: lightBlue(1),
    marginBottom: -5,
  },
  bio: {
    color: Black(0.6),
    fontSize: 14,
    textAlign: 'start'
  },
  name: {
    fontSize: 24,
    letterSpacing: '1.2px',
    fontWeight: 600,
    textAlign: 'start',
    color: lightBlue(1),
    marginBottom: -2,
  },
  position: {
    fontSize: 18,
    letterSpacing: '1px',
    fontWeight: 400,
    textAlign: 'start',
    color: Black(0.6)
  },
  logo: {
    display: 'flex',
    flex: 1,
    display: 'block',
  },
}

const styles = {
  jumbotron: {
    height: '70vh',
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
  section5: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: White(1),
    justifyContent: 'flex-start',
    width: '100vw',
    paddingTop: '3vh',
    paddingBottom: '6vh',
    paddingLeft: '10vw',
    paddingRight: '10vw'
  },
  smallArrow: {
    height: 60,
  },
  text: {
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
    fontSize: 100,
    letterSpacing: '2px',
    fontWeight: 850,
    color: Black(0.1)
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
    marginTop: 0,
    minWidth: 88,
    minHeight: 5,
    maxWidth: 88,
    maxHeight: 5,
    flex: 1,
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
    justifyContent: 'flex-start',
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

