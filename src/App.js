import React, { Component } from 'react';

import './App.css';


import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';



class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Shop></Shop>
      </div>
    );
  }
}



export default App;
