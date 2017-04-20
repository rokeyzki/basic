import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, hashHistory } from 'react-router';

class PageFoo extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="a">
            <li>PartA</li>
          </Link>
          <Link to="b/1000">
            <li>PartB</li>
          </Link>
          <Link to="c">
            <li>PartC</li>
          </Link>
        </ul>
        <div>
          {this.props.children || <PartA />}
        </div>
      </div>
    );
  }
}

PageFoo.propTypes = {
  children: React.PropTypes.element,
};

class PartA extends React.Component {
  render() {
    return (
      <div>这是 PartA</div>
    );
  }
}

class PartB extends React.Component {
  render() {
    return (
      <div>这是 PartB，Key：{this.props.params.key || '暂无数据'}</div>
    );
  }
}

PartB.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string),
};

class PartC extends React.Component {
  render() {
    return (
      <div>
        <p>这是 PartC</p>
        <ul>
          <Link to="c/x/1">
            <li>c x 1</li>
          </Link>
          <Link to="c/x/20">
            <li>c x 20</li>
          </Link>
        </ul>
        <div>
          {this.props.children || '这是缺省状态下显示的文字信息'}
        </div>
      </div>
    );
  }
}

PartC.propTypes = {
  children: React.PropTypes.element,
};

class PartX extends React.Component {
  render() {
    return (
      <div>X ID: {this.props.params.id}</div>
    );
  }
}

PartX.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string),
};

class NoMatch extends React.Component {
  render() {
    const style = {
      color: 'red',
    };
    return (
      <div style={style}>无效链接</div>
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PageFoo}>
      <Route path="a" component={PartA} />
      <Route path="b/:key" component={PartB} />
      <Route path="c" component={PartC}>
        <Route path="x/:id" component={PartX} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.querySelector('#app')
);
