import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import React, { Component, useState } from 'react'
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { REACT_APP_NEWS_API } from './utils';

// export default class App extends Component {
const App = ()=>{

  const pageSize = 6;
  const apiKey=REACT_APP_NEWS_API;

  // state={
  //   progress:0
  // }

  // const setProgress = (progress) => {
  //   setState({progress : progress})
  // }

  const [progress, setProgress] = useState(0);



  // c = "Gyan";
  
  // render() {
    return (
      <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} setProgress = {setProgress}  key="general" pageSize={pageSize} category="general" country="in"/>}></Route>
        <Route exact path="/General" element={<News apiKey={apiKey} setProgress = {setProgress}  key="general" pageSize={pageSize} category="general" country="in"/>}></Route>
        <Route exact path="/Business" element={<News apiKey={apiKey} setProgress = {setProgress}  key="business" pageSize={pageSize} category="business" country="in"/>}></Route>
        <Route exact path="/Entertainment" element={<News apiKey={apiKey} setProgress = {setProgress}  key="entertainment" pageSize={pageSize} category="entertainment" country="in"/>}></Route>
        <Route exact path="/Health" element={<News apiKey={apiKey} setProgress = {setProgress}  key="health" pageSize={pageSize} category="health" country="in"/>}></Route>
        <Route exact path="/Science" element={<News apiKey={apiKey} setProgress = {setProgress}  key="science" pageSize={pageSize} category="science" country="in"/>}></Route>
        <Route exact path="/Sports" element={<News apiKey={apiKey} setProgress = {setProgress}  key="sports" pageSize={pageSize} category="sports" country="in"/>}></Route>
        <Route exact path="/Technology" element={<News apiKey={apiKey} setProgress = {setProgress}  key="technology" pageSize={pageSize} category="technology" country="in"/>}></Route>
      </Routes>
        <Footer/>
      </div>
    )
  // }
}

export default App;