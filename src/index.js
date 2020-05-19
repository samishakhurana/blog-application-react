import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import HomePage from './pages/HomePage';
// import BlogPage from './pages/HomePage';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
//   (
//   <Router history={browserHistory}>
//     <Route path = "/" component = {App}>
//       {/* <IndexRoute component = {HomePage} /> */}
//       {/* <Route path="edit/:blogId" component = {BlogPage} /> */}
//       <Route path="create" component = {BlogPage} />
//       {/* <Route path=":blogId" component = {BlogPage} /> */}
//     </Route>
//   </Router>
// ),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
