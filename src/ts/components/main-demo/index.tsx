import * as React from "react";
import {
  HashRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

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

const Component = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home Link</Link></li>
      </ul>

      <hr />

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default Component;
