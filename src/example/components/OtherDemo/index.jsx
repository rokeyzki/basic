import React from 'react';

import Store from '../../store';

export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Store.getState(),
    };
  }

  componentWillMount() {
    Store.subscribe(() => {
      this.setState({
        data: Store.getState(),
      });
    });
  }

  componentDidUpdate() {
    console.log('组件 otherDemo 已重新渲染');
  }

  render() {
    return (
      <div>
        <hr />
        <p>state key1: {this.state.data.get('key1')}</p>
        <p>state key2: {this.state.data.get('key2')}</p>
        <p>state key3: {this.state.data.get('key3').toString()}</p>
      </div>
    );
  }
}