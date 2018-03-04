import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


let __WHITE_UP__ = {
  icon: '/images/arrows/whitearrowup200.png',
  class: "box pulse-button"
}

let __WHITE_DOWN__ = {
  icon: '/images/arrows/whitearrowdown200.png',
  class: "box pulse-button"
}

let __DARK_BLUE_DOWN__ = {
  icon: '/images/arrows/whitearrowdown200.png',
  class: "box pulse-button"
}

export default class NextSectionCue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var config = {}
    switch (this.props.config) {
      case 'whiteup':
        config = __WHITE_UP__
        break;
      case 'whitedown':
        config = __WHITE_DOWN__
        break;
      default: 
        config = {...this.props}
    }

    return (  
      <a 
        class={config.class}
        style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: 60,
          width: 60,
          padding: 10,
          paddingBottom: 13,
          paddingTop: 7,
        }}
        href={this.props.href}
        >
        <img 
          src={config.icon} 
          style={styles.arrow} />
      </a>
    )
  }
}

NextSectionCue.defaultProps = {
  ...__WHITE_DOWN__,
  href: '#',
  style: {
    justifyContent: 'center',
    alignItems: 'center',
  }
}

let styles = {
  arrow: {
    maxHeight: 40,
    maxWidth: 40
  }
}