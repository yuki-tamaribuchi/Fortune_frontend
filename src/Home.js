import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

import GetRandomTrack from "./GetRandomTrack";

class Home extends React.Component{
  render() {
    return (
      <div className="Home">
        <h1 className="logo logo-lg">Fortune</h1>
        <Link to="getFortune">
          <Button className="get-fortune-button">Get Fortune</Button>
        </Link>
        
        <div className="main">
        <Routes>
          <Route path="getFortune" element={<GetRandomTrack />}></Route>
        </Routes>
      </div>
      </div>

      
    )
  };
}

export default Home
