import { Entity } from 'aframe-react';
import React, { Component } from 'react';

class Sky extends Component {

  render() {
    return (
      <Entity
        sky
        geometry={{primitive: 'sphere', radius: 30}}
        material={{shader: 'flat', color: '#EEEEEE'}}
        scale="1 1 -1"
      />
    );
  }
}

export default Sky;
