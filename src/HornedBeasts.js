import React from 'react';
import data from './data.json';

class HornedBeasts extends React.Component {
  // render () {
  //   return (
  //     <div>
  //       <h2>
  //         {this.props.title}
  //       </h2>
  //       <img src = {this.props.image_src} alt = {this.props.image_alt} title = {this.props.image_title}></img>
  //       <p>
  //         {this.props.description}
  //       </p>
  //     </div>
  //   );
  // }

  constructor(props){
    super(props);
    this.state = {
      favoriteClicks: 0,
      data: data
    };
  }


  fav = () => {
    this.setState({favoriteClicks: this.state.favoriteClicks + 1});
  }

  render() {
    console.log("Current data: " + this.state.data);
    return (
      <>
        <h1>{this.props.title}</h1>
      </>
    );
  }
}
export default HornedBeasts;
