import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import allBeasts from './data.js';
import Col from 'react-bootstrap/Col';



class Main extends React.Component {
  render () {
    return (
      <Col>{allBeasts.forEach(elem => <HornedBeasts title ={elem.title} image_url = {elem.image_url} description = {elem.description}/>)}</Col>
      // allBeasts.forEach(elem => <HornedBeasts title = "" image_url = "" description = ""/>)
      
    )
  }


}

export default Main;
