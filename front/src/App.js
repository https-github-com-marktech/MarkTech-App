import React from "react";
import "./App.css";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Gridproducts from "./components/Startpage/Gridproducts";
import Productcard from "./components/Product/Productcard";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Categories" component={Gridproducts} />
          <Route path="/Showproduct" component={Productcard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
