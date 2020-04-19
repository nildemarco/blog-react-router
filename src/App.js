import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PostDetails from './components/PostDetails';



const App = () => {
  
  return (
    <Router>
    <div className="container-main">
      <nav><h1>Bender's most awesome blog</h1></nav>
  
    </div>
    
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path="/post/:id" component={PostDetails}></Route>
    </Switch>
  
    </Router>
  );
}

export default App;
