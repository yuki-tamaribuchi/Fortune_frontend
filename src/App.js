import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import GetRandomTrack from './GetRandomTrack';


class App extends React.Component{
  componentDidMount(){
    document.title = "Fortune";
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/getFortune" element={<GetRandomTrack />} />
          </Routes>
        </BrowserRouter>
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200&family=Outfit&display=swap" rel="stylesheet"/> 
        </div>
        
      </div>
    )
  };
}

export default App;