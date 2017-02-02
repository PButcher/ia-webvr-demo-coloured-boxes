import { Entity } from 'aframe-react';
import React, { Component } from 'react';

class Floor extends Component {

  render() {
    return (
      <Entity
        geometry="primitive: plane; height: 10; width: 10"
        position="0 0 0"
        rotation="-90 0 0"
        material="color: #A0A0A0;"
      />
    );
  }
}

export default Floor;
