import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="blog-appl__wrapper">
      <div className="blog-appl__wrapper_heading">YOUR VIEWS!!!</div>
      <Router>
        <Route exact path = "/" component = {HomePage} />
        <Route path="/create" component = {BlogPage} />
        <Route path="/edit/:blogId" component = {BlogPage} />
      </Router>
    </div>
  );
}

export default App;
