import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import ram from './img/ram.jpg';
import moose from './img/moose.jpeg';

class Main extends HornedBeasts {
  render () {
    return (

      <div>
        <HornedBeasts title = {'Horned Beast #1'} image_src = {ram} description = {'This is a smaller horned beast'} />
        <HornedBeasts title = {'Horned Beast #2'} image_src = {moose} description = {'This is a deceptively large horned beast'} />
      </div>

    );
  }
}

export default Main;
