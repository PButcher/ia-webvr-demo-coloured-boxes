import { Entity } from 'aframe-react';
import React, { Component } from 'react';

class Lights extends Component {

  render() {
    return (
      <Entity>
        <Entity
          light={{
            type: 'ambient',
            color: '#FFF',
            intensity: 0.5
          }}
        />
        <Entity
          light={{
            type: 'directional',
            intensity: 0.5
          }}
          position="-1 1 1"
        />
      </Entity>
    );
  }
}

export default Lights;
