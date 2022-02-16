import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/Profile';
import Categories from './pages/Categories';



function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile' component={Profile} />
            <Route path='/Categories' component={Categories} />

        </Switch>
      </Router>
  );
}

export default App;