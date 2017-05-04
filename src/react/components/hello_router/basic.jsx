import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Topics from './topic';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home Link</Link></li>
        <li><Link to="/about">About Link</Link></li>
        <li><Link to="/topics">Topics Link</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
