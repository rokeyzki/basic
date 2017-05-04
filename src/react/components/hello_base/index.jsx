import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class HelloBase extends React.Component { // TODO: 待整理React.PureComponent
  constructor(props) {
    console.log('初次载入组件时才会执行构造函数');
    super(props); // 获取外部调用本组件时传入的属性(props)
    console.dir(this.props);
    console.log(this.props.prop1);
    console.log(this.props.prop2);

    this.state = { // 设置组件初始状态(state)
      key1: 'value1',
      key2: true,
    };

    this.handleClick = this.handleClick.bind(this); // 事件处理绑定上下文
    this.updateState = this.updateState.bind(this);
    this.reset = this.reset.bind(this);
  }

  // 生命周期
  componentWillMount() {
    console.log('在组件初次渲染前调用');
  }

  componentDidMount() {
    console.log('在组件初次渲染后调用');
  }

  shouldComponentUpdate(nextProps, nextState) { // 当组件属性(props)或组件状态(state)发生更新时，可以自定义判断是否重新渲染组件
    if (this.state.key1 !== nextState.key1) {
      return true; // state.key1 发生变化时，要进行重新渲染组件
    }

    return false; // 其他情况则不重新渲染组件
  }

  componentWillUpdate() {
    console.log('在组件重新渲染前调用');
  }

  componentDidUpdate() {
    console.log('在组件重新渲染后调用');
  }

  componentWillUnmount() {
    console.log('在组件移除渲染前调用');
  }

  // 事件处理
  handleClick() {
    console.clear();

    console.dir(this); // 获取上下文
    console.dir(this.props); // 获取组件属性(props)
    console.dir(this.state); // 获取组件状态(state)

    console.log(this.one.value);
    console.log(this.two1.checked, this.two2.checked, this.two3.checked);
    console.log(this.three.value);

    console.log('button 点击事件触发');
  }

  updateState(type) {
    console.clear();

    let obj = {};
    if (+type === 1) obj = { key1: 'value1(update)' };
    else obj = { key2: !this.state.key2 };

    this.setState(obj); // 更新组件状态(state)，setState()默认会触发一次组件重绘
    // 如果有设置生命周期函数shouldComponentUpdate的时候则进行自定义判断是否重绘
  }

  reset() {
    console.clear();
    console.log('button 强制重新渲染组件');
    this.forceUpdate(); // 强制重新渲染组件
  }

  // 组件渲染
  render() {
    // 内联样式
    const style = {
      fontStyle: 'italic',
      color: 'red',
    };

    // JSX
    return (
      <div className="helloBase">
        <div>
          <p style={style}>hello react</p>
        </div>

        <div>
          {/* 文本输入框：不要使用value属性设置文本输入框元素的初值，应当使用defaultValue */}
          <input type="text" ref={(ref) => { this.one = ref; }} defaultValue="demo" />
        </div>

        <div>
          {/* 多选框：不要使用checked属性设置复选按钮的初始选中状态，应当使用defaultChecked */}
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
          {/* 单选框：不要使用option元素的selected属性设置单选按钮组的初始选中状态，应当使用 select元素的defaultValue */}
          <select defaultValue="B" ref={(ref) => { this.three = ref; }}>
            <option value="A">China</option>
            <option value="B">Japan</option>
            <option value="C">Korea</option>
          </select>
        </div>

        <div>
          <input type="button" value="test button" onClick={this.handleClick} />
        </div>

        <div>
          {/* 函数传参：JSX 中给函数传参的方法 */}
          <input type="button" value="state key1 button" onClick={() => { this.updateState(1); }} />
        </div>

        <div>
          <input type="button" value="state key2 button" onClick={() => { this.updateState(2); }} />
        </div>

        <div>
          <input type="button" value="reset button" onClick={this.reset} />
        </div>
      </div>
    );
  }

}

// 属性(props) 验证
HelloBase.propTypes = { // 如果是引用压缩的react.min.js文件，则不包含属性验证功能
  prop1: PropTypes.number.isRequired, // React 15.15 弃用 React.propTypes，改为引入 PropTypes 包来验证
  prop2: PropTypes.string,
};

// 属性(props)默认值
HelloBase.defaultProps = {
  prop1: 0,
  prop2: 'I am prop2',
};
