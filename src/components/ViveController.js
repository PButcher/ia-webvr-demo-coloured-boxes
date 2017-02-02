import { Entity } from 'aframe-react';
import React, { Component } from 'react';
import 'aframe-vive-cursor-component';

class ViveController extends Component {

  render() {

    let controller = null;

    if(this.props.devices.isHMD && this.props.hasCursor) {
      controller = (
        <Entity
          vive-controls={{hand: this.props.hand}}
          vive-cursor
          {...this.props}
        />
      );
    } else {
      controller = (
        <Entity
          vive-controls={{hand: this.props.hand}}
          {...this.props}
        />
      );
    }

    return (
      controller
    );
  }
}

export default ViveController;
