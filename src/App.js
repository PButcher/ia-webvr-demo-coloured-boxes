import { Scene } from 'aframe-react';
import React, { Component } from 'react';

import Camera from './components/Camera';
import Sky from './components/Sky';
import Lights from './components/Lights';
import Floor from './components/Floor';
import ColourBox from './components/ColourBox';
import ViveController from './components/ViveController';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camera: {
        initialPos: "0 1 0"
      },
      devices: {
        isHMD: false,
        isMobile: false
      }
    };
  };

  componentDidMount() {

    // Resets camera for HMDs
    if(window.AFRAME.utils.device.checkHeadsetConnected()) {
      this.setState({
        camera: {initialPos: "0 0 0"},
        devices: {isHMD: true}
      });
    }

    //
    if(window.AFRAME.utils.device.isMobile()) {
      this.setState({devices: {isMobile: true}});
    }
  }



  render() {
    return (
      <Scene inspector>
        <Camera
          position={this.state.camera.initialPos}
        />
        <Sky/>
        <Lights/>
        <Floor/>
        <ColourBox
          size='0.5'
          position='1 0.25 -1'
          rotation='0 45 0'
        />
        <ColourBox
          size='0.5'
          position='0 0.25 -1'
          rotation='0 45 0'
        />
        <ColourBox
          size='0.5'
          position='-1 0.25 -1'
          rotation='0 45 0'
        />
        <ViveController
          hand='left'
          devices={this.state.devices}
        />
        <ViveController
          hand='right'
          devices={this.state.devices}
          hasCursor
        />
      </Scene>
    );
  }
}

export default App;
