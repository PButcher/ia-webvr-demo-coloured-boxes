import { Entity } from 'aframe-react';
import React, { Component } from 'react';
import 'aframe-vive-cursor-component';

class ViveController extends Component {

  render() {

    let controller = null;

    // Renders vive cursor if HMD is present
    if(this.props.isHMD && this.props.hasCursor && !this.props.isMobile) {
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
