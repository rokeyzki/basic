import React from 'react';

export default class HelloBase extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   example: 'example',
    // };
    this.handleClick = this.handleClick.bind(this); // 事件处理绑定上下文
  }

  // 生命周期
  componentWillMount() {
    console.log('在渲染前调用');
  }

  componentDidMount() {
    console.log('在初次渲染后被调用');
  }

  componentWillUnmount() {
    console.log('在被移除时调用');
  }

  // 事件处理
  handleClick() {
    console.clear();
    console.dir(this); // 获取上下文
    console.log(this.one.value);
    console.log(this.two1.checked, this.two2.checked, this.two3.checked);
    console.log(this.three.value);
    console.log('button 点击事件触发');
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
      <div>
        <p style={style}>hello react</p>
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
          <input type="button" defaultValue="test button" onClick={this.handleClick} />
        </div>
      </div>
    );
  }

}
