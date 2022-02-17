import React from "react";
import "./App.css";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Gridproducts from "./components/Startpage/Gridproducts";
import Productcard1 from "./components/Product/Productcard1";
import Home from "./components/pages/Home";
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
          <Route path="/Showproduct/{id}" component={Productcard1} />
=======
          <Route path="/Showproduct" component={Productcard1} />
>>>>>>> 333a001980696d3c5f805fc6ff64497d6b8902c9
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
