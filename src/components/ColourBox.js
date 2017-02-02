import { Entity } from 'aframe-react';
import React, { Component } from 'react';

class ColourBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColour: '#FF0000',
      currentColourIndex: 0
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const colours = [
      '#FF0000', '#FFFF00', '#FF00FF', '#00FFFF', '#00FF00', '#0000FF'
    ];

    let currentColour = this.state.currentColourIndex + 1;

    if(this.state.currentColourIndex === colours.length - 1) {
      currentColour = 0;
    }

    this.setState({
      currentColour: colours[currentColour],
      currentColourIndex: currentColour
    });
  }

  render() {
    return (
      <Entity
        geometry={{
          primitive: 'box',
          width: this.props.size,
          height: this.props.size,
          depth: this.props.size
        }}
        material={{
          color: this.state.currentColour
        }}
        position={this.props.position}
        rotation={this.props.rotation}
        onClick={this.changeColor}
      />
    );
  }
}

export default ColourBox;
