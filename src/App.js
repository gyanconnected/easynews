import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import React, { Component } from 'react'
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 6;
  c = "Gyan";
  render() {
    return (
      <div>
        <Navbar/>
        
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={this.pageSize} category="general" country="in"/>}></Route>
        <Route exact path="/General" element={<News key="general" pageSize={this.pageSize} category="general" country="in"/>}></Route>
        <Route exact path="/Business" element={<News key="business" pageSize={this.pageSize} category="business" country="in"/>}></Route>
        <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" country="in"/>}></Route>
        <Route exact path="/Health" element={<News key="health" pageSize={this.pageSize} category="health" country="in"/>}></Route>
        <Route exact path="/Science" element={<News key="science" pageSize={this.pageSize} category="science" country="in"/>}></Route>
        <Route exact path="/Sports" element={<News key="sports" pageSize={this.pageSize} category="sports" country="in"/>}></Route>
        <Route exact path="/Technology" element={<News key="technology" pageSize={this.pageSize} category="technology" country="in"/>}></Route>
      </Routes>
   
        <Footer/>
      </div>
    )
  }
}


