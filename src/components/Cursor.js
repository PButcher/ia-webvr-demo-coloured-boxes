import { Entity } from 'aframe-react';
import React, { Component } from 'react';

class Cursor extends Component {

  render() {
    return (
      <Entity
        cursor=""
        geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.01"
        position="0 0 -0.5"
        material="color: black; shader: flat"
      />
    );
  }
}

export default Cursor;
