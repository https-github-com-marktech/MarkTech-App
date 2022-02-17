import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Gridproducts from "./components/Startpage/Gridproducts";
import Productcard1 from "./components/Product/Productcard1";
import Home from "./components/pages/Home";

import Form from "./components/Form";



import Footer from "./components/Footer/Footer";


function App() {


  return (

    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Categories" component={Gridproducts} />
<<<<<<< HEAD
            <Route path="/CreateAd" component={Form} />
            <Route path="/Showproduct" component={Productcard1} />
        </Switch>
=======
          <Route path="/Showproduct" component={Productcard1} />
        </Switch>np
>>>>>>> 037648a54c8921162bd1b290bd7babe989700916
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
