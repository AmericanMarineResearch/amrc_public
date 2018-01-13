// PersonCard.js
// Yuan Wang

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {  Button,
          Col,
          Jumbotron,
          MenuItem,
          Image,
          Nav,
          NavDropdown,
          NavItem,
          Navbar, 
        } from 'react-bootstrap';

import { __COMPONENT_STYLES__ } from '../global/Styles.js'

export default class PersonCard extends Component {
  render() {
    return (
      <Col
        style={styles.container} 
        xs={3} md={3}>
        <div style={styles.thumbnailContainer}>
          <img 
            responsive
            resizeMode='cover'
            class='square'
            style={styles.thumbnailImage}
            src={this.props.person.image}/>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.text}>
            {this.props.person.name}
          </h2>
          <p style={styles.text}>
            {this.props.person.title}
          </p>
          <p style={styles.text}>
            {this.props.person.bio}
          </p>
        </div>
      </Col>
    );
  }
}

PersonCard.defaultProps = {
  person: {
    image: "https://thumbs-prod.si-cdn.com/cdrlDkX7d9V9Oo4peaaqNugNX4c=/fit-in/1072x0/https://public-media.smithsonianmag.com/filer/lionfish-invasion-520.jpg",
    name: 'First N. Last',
    title: 'Title',
    bio: 'Lorem ipsum'
  }
}

const styles = {
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    marginBottom: 10,
  },
  thumbnailContainer: {
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%'
  },
  thumbnailImage: {
    display: 'flex',
    resizeMode: 'cover',
    width: '100%',
    flex: 1
  },
  text: {
    margin: 1,
    padding: 2
  }
}