import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link,
} from 'react-router-dom';

import Topic from './topic';

/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}; */

const Component = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={
        () => (
          <h3>请选择一个主题.</h3>
        )
      }
    />
  </div>
);

Component.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Component;
