// BackgroundImage.js
// Yuan Wang

import React, {Component } from 'react';
import { Black } from '../global/Colors.js'

const BACKGROUND_IMAGE_URL = 'url(https://www.scholastic.com/content/dam/teachers/Book%20List/2016-2017/books-about-oceans-book-list-4-3.jpg)'

// TODO: implement https://stackoverflow.com/questions/21087518/animate-css-background-position-with-smooth-results-sub-pixel-animation

export default class BackgroundImage extends Component {

  render() {
  	return (
      <div 
        style={{
          display: 'flex',
          flex: 1,
          backgroundImage: this.props.background,

        }}
        class={this.props.pan} >
        
        <div
          style={{...{
            display: 'flex',
            flex: 1,
            backgroundColor: this.props.backgroundColor
          }, ...this.props.contentStyle}}>
          {this.props.children}
        </div>      
      </div>
            
      );
  }
}

BackgroundImage.defaultProps = {
  background: BACKGROUND_IMAGE_URL, 
  backgroundColor: Black(0.5),
  pan: 'pan5',
  contentStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
};
