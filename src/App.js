import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import React, { Component } from 'react'
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { REACT_APP_NEWS_API } from './utils';

export default class App extends Component {
  pageSize = 6;
  apiKey=REACT_APP_NEWS_API;

  state={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  c = "Gyan";
  
  render() {
    return (
      <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        
      <Routes>
        <Route exact path="/" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="general" pageSize={this.pageSize} category="general" country="in"/>}></Route>
        <Route exact path="/General" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="general" pageSize={this.pageSize} category="general" country="in"/>}></Route>
        <Route exact path="/Business" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="business" pageSize={this.pageSize} category="business" country="in"/>}></Route>
        <Route exact path="/Entertainment" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="entertainment" pageSize={this.pageSize} category="entertainment" country="in"/>}></Route>
        <Route exact path="/Health" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="health" pageSize={this.pageSize} category="health" country="in"/>}></Route>
        <Route exact path="/Science" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="science" pageSize={this.pageSize} category="science" country="in"/>}></Route>
        <Route exact path="/Sports" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="sports" pageSize={this.pageSize} category="sports" country="in"/>}></Route>
        <Route exact path="/Technology" element={<News apiKey={this.apiKey} setProgress = {this.setProgress}  key="technology" pageSize={this.pageSize} category="technology" country="in"/>}></Route>
      </Routes>
   
        <Footer/>
      </div>
    )
  }
}


