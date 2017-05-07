import React from 'react';
import PropTypes from 'prop-types';

import Store from '../../store';

import syncAction from '../../actions/demoSync';
import asyncAction from '../../actions/demoAsync';

import style from './style.scss';

import OtherDemo from '../OtherDemo';

export default class Component extends React.PureComponent {
  static updateState(type) {
    console.clear();

    if (+type === 1) Store.dispatch(syncAction.change(2));
    else Store.dispatch(asyncAction.group());
  }

  constructor(props) {
    console.clear();

    super(props);
    console.log(`props1: ${this.props.prop1}`);
    console.log(`props2: ${this.props.prop2}`);

    this.state = {
      data: Store.getState(),
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillMount() {
    Store.subscribe(() => {
      this.setState({
        data: Store.getState(),
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('组件 FormDemo 触发 shouldComponentUpdate');

    if (this.state.data.get('key3') !== nextState.data.get('key3')) {
      console.log('shouldComponentUpdate return true');
      return true;
    }

    console.log('shouldComponentUpdate return false');
    return false;
  }

  componentDidUpdate() {
    console.log('组件 FormDemo 已重新渲染');
  }

  handleClick() {
    console.clear();

    console.log(this.one.value);
    console.log(this.two1.checked, this.two2.checked, this.two3.checked);
    console.log(this.three.value);

    console.log('button 点击事件触发');
  }

  reset() {
    console.clear();

    this.forceUpdate();
  }

  render() {
    const inlineStyle = {
      fontStyle: 'italic',
      color: 'red',
    };

    return (
      <div className="helloBase">
        <div>
          <p style={inlineStyle}>hello react</p>
        </div>

        <div>
          <input type="text" ref={(ref) => { this.one = ref; }} defaultValue="demo" />
        </div>

        <div className={style.cssModule}>
          <input
            type="checkbox"
            ref={(ref) => { this.two1 = ref; }}
            name="fooA"
            value="1"
          /> 一选项

          <input
            type="checkbox"
            ref={(ref) => { this.two2 = ref; }}
            name="fooA"
            value="2"
            defaultChecked
          /> 二选项

          <input
            type="checkbox"
            ref={(ref) => { this.two3 = ref; }}
            name="fooA"
            value="3"
          /> 三选项
        </div>

        <div>
          <select defaultValue="B" ref={(ref) => { this.three = ref; }}>
            <option value="A">China</option>
            <option value="B">Japan</option>
            <option value="C">Korea</option>
          </select>
        </div>

        <div>
          <input type="button" value="get button" onClick={this.handleClick} />
        </div>

        <div>
          <input
            type="button" value="state key2 sync button"
            onClick={() => { Component.updateState(1); }}
          />
        </div>

        <div>
          <input
            type="button" value="state key2 async button"
            onClick={() => { Component.updateState(2); }}
          />
        </div>

        <div>
          <input type="button" value="reset button" onClick={this.reset} />
        </div>

        <OtherDemo />

      </div>
    );
  }

}

Component.propTypes = {
  prop1: PropTypes.number.isRequired,
  prop2: PropTypes.string,
};

Component.defaultProps = {
  prop1: 0,
  prop2: 'abc',
};
