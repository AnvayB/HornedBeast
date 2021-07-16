import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: data,
      horns: 0
    }
  }
  
  horns = (num) => {
    this.setState({
      horns: parseInt(num)
    });
  }
  
  
  render () {
    return (
      <div className = "app">
        <Header />
        <Main />
        allBeasts = {this.state.allBeasts};
        <Footer />
      </div>
    );
  }
}

export default App;
