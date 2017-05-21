import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Store from '../../store';

import style from './style.scss';

import { Page } from './page';

class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Store.getState().navigationState,
    };
  }

  componentWillMount() {
    Store.subscribe(() => {
      this.setState({
        data: Store.getState().navigationState,
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Container: shouldComponentUpdate');

    if (this.state !== nextState) {
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    console.log('组件 Container 已重新渲染');
  }

  render() {
    const isShowHeaderBar = this.state.data.getIn(['headerBar', 'active']);

    const NoMatch = () => (
      <div>
        <h2>404</h2>
      </div>
    );

    return (
      <div style={{ overflowY: 'scroll', height: `${document.documentElement.clientHeight}px` }}>
        <div className={style.container} style={{ marginTop: (isShowHeaderBar) ? '40px' : '0' }}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/chapter/1/page/1" />
            </Route>
            <Route path="/chapter/:chapterId/page/:pageId" component={Page} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export { Container };
