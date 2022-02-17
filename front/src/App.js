import React from 'react';
import './App.css';
import Navbar from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from "./components/pages/Profile";
import Categories from "./components/pages/Categories";
import Home from "./components/pages/Home";
import Gridproducts from "./components/Startpage/Gridproducts";

function App() {
  return (

      <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
          <Route path='/Profile' component={Profile} />
            <Route path='/Categories' component={Gridproducts} />
        </Switch>
      </Router>
         
      </div>
  );
}

export default App;
