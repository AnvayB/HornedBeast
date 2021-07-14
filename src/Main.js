import React from 'react';
import HornedBeasts from './HornedBeasts.js';
// import ram from './img/ram.jpg';
// import ox from './img/Oxen.jpeg';
import data from './data.json';


class Main extends React.Component {
  // render () {
  //   return (

  //     <div>
  //       <HornedBeasts title = {'Horned Beast #1'} image_src = {ram} description = {'This is a ram'} />
  //       <HornedBeasts title = {'Horned Beast #2'} image_src = {ox} description = {'This is an ox'} />
  //     </div>

  //   );
  // }

  constructor(props){
    super(props);
    this.state = {
      data: data
    }
  };

  allBeasts = (data) => {
    let newBeasts = data.map(value => {
      return <HornedBeasts title = {value.title} description = {value.description} />;
    })
    return newBeasts;
  };

  render () {
    return (
      <div id = "Main">
        {this.allBeasts(data)}
      </div>
    );
  }


}

export default Main;
