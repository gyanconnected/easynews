import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  c = "Gyan";
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        <Footer/>
      </div>
    )
  }
}


