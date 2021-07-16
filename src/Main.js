import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import { CardColumns } from 'react-bootstrap';



class Main extends React.Component {
  render () {
    return (
      <div id = "beast_box">
        <CardColumns>
        {this.props.allBeasts.map((beast, idx) => (
          <HornedBeasts 
            key={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            
          />
        ))}
        </CardColumns>
      </div>
    )
  }


}

export default Main;
