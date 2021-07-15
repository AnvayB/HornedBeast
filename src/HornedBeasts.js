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
      // <>
      //   <h2>{this.props.title}</h2>
      //   <p>{this.props.description}</p>
      //   <img src = {heart} alt = 'red heart png'/>
      //   <span>Favorites: {this.state.favoriteClicks}</span>
      // </>

      <Card>
        <Card.Img variant='top' src={this.props.image_url} alt = "" onClick={this.fav}/>
        <Card.Body>
          <Card.Img variant='top' src={heart} onClick={this.fav}/>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Favorites: {this.state.favoriteClicks}</Card.Text>
        </Card.Body>
      </Card>

    )
  }
}
export default HornedBeasts;
