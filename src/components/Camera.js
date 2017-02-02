import { Entity } from 'aframe-react';
import React, { Component } from 'react';
import Cursor from './Cursor';

class Camera extends Component {
  render() {
    return (
      <Entity camera look-controls wasd-controls {...this.props}>
        <Cursor/>
      </Entity>
    );
  }
}

export default Camera;
