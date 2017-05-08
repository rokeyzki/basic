import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

import FormDemo from '../FormDemo';
import Topics from './topics';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const NoMatch = () => (
  <div>
    <h2>404</h2>
  </div>
);

const Form = () => (
  <FormDemo prop1={123} />
);

const Component = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home Link</Link></li>
        <li><Link to="/form">Form Link</Link></li>
        <li><Link to="/topics">Topics Link</Link></li>
        <li><Link to="/redirect">Redirect Link</Link></li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/topics" component={Topics} />
        <Route path="/redirect">
          <Redirect to="form" />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default Component;
