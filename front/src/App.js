import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from "./components/pages/Profile";
import Categories from "./components/pages/Categories";
import Home from "./components/pages/Home";




function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' component={Home} />
          <Route path='/Profile' component={Profile} />
            <Route path='/Categories' component={Categories} />

        </Switch>
      </Router>
  );
}

export default App;