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
        <NavHeader/>

        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage 
            background={'url(/images/diver-diving-swimming-sea-71276.jpeg)'}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
          </BackgroundImage>
        </Jumbotron>

        <div style={styles.section4}>
          <h1 style={styles.bigTitle}>
            WHO WE ARE
          </h1>
        </div>

        <BackgroundImage 
          background={'url(/images/pexels-photo-260551.jpeg)'}
          pan={null}
          contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>

          <div style={styles.hcap}/>
          <h2 style={styles.subtitle}>
            THE TEAM
          </h2>

          <TeamMemberCard
            name={'Yuan Wang'}
            title={"President"}
            image={'/images/pexels-photo-260551.jpeg'}
            bio={"Yuan hails from Los Angeles"}
          />
          <TeamMemberCard
            name={'Kiara Korkuc'}
            title={'Mechanical Engineer'}
            bio={"Kiara hails from Gulf Breeze"}/>

          <TeamMemberCard/>
          <TeamMemberCard/>
          
        </BackgroundImage>
        <Footer/>
      </div>
    );
  }
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

  render() {

    return (
      <div 
        style={{...teamCardStyles.container, ...{opacity: this.state.opacity}}} 
        onClick={this.onHover} >
        <div style={{...teamCardStyles.col, }}>
          <BackgroundImage 
            background={'url(' + this.props.image + ')'}
            pan={'still'}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.body}}>
          </BackgroundImage>
        </div>
        <div style={{...teamCardStyles.col2, ...teamCardStyles.column}}>
          <div style={teamCardStyles.blueCap} />
          <h3 style={teamCardStyles.name}>
            {this.props.name}
          </h3>
          <h4 style={teamCardStyles.position}>
            {this.props.title}
          </h4>
        </div>
        <div style={{...teamCardStyles.col3, ...teamCardStyles.column}}>
          <p style={teamCardStyles.bio}>
            {this.props.bio}
          </p>
        </div>
      </div>
    )
  }
}

TeamMemberCard.defaultProps = {
  name: 'Rachel Hogue',
  title: "Chief Designer",
  bio: 'Rachel is a rockstart designer.',
  image: '/images/amrc-01.png'
}

const teamCardStyles = {
  container: {
    backgroundColor: White(1),
    flex: 1,
    display: 'flex',
    margin: 20,
    minHeight: 400,
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
    height: '100vh',
    marginBottom: 0,
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
    paddingTop: '8vh',
    paddingBottom: '8vh',
    paddingLeft: '15vw',
    paddingRight: '15vw'
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
    marginTop: 5,
    maxWidth: 88,
    maxHeight: 8,
    flex: 1,
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
    alignItems: 'stretch',
    display: 'flex',
    flex: 1,
  },
  body2: {
    justifyContent: 'center',
    alignItems: 'center',
  }

}

