import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>

        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
            <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
            <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
            <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br />{dummySentences.slice(0, 2).join(' ')}</Col>
          </Row>
        </Grid>

        
      </div>
    );
  }
}

export default App;
