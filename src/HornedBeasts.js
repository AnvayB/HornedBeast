import React from 'react';
import heart from './heart.png'
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favoriteClicks: 0,
    };
  }


  fav = () => {
    this.setState({favoriteClicks: this.state.favoriteClicks + 1});
  }

  render () {
    return (

      <Card onClick={this.fav}>
        <Card.Img variant='top' src={this.props.src} alt = "" onClick={this.fav}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{heart} = {this.state.favoriteClicks} favorites</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>

    )
  }
}
export default HornedBeasts;
