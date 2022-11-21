import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

import store from '../../store'

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.icecreams,
    temperature: store.getState().freezer.temperature
  }
  render() {
    console.log(this.state)
    const flavors = this.state.flavors;
    const freezerFlavors = Object.keys(flavors).map( flavorsName => 
      <FreezerFlavor 
        key={flavorsName} 
        flavorName={flavorsName} 
        scoops={flavors[flavorsName]} />);
    return (
      <Panel title={`Freezer (${this.state.temperature}°C)`}>
        { freezerFlavors }
      </Panel>
    );
  }
}

export default Freezer;

