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
import { HelloTS } from './hello-ts.tsx';

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
        <li><Link to="/" replace>Home Link</Link></li>
        <li><Link to="/form" replace>Form Link</Link></li>
        <li><Link to="/topics" replace>Topics Link</Link></li>
        <li><Link to="/redirect" replace>Redirect Link</Link></li>
      </ul>

      <hr />

      <HelloTS compiler="TypeScript" framework="React" />

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
