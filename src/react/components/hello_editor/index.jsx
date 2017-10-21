import React from 'react';
// import PropTypes from 'prop-types';

import { MyEditor } from './editor';

class HelloEditor extends React.PureComponent {
  componentDidMount() {
    const html = '<p>第一个编辑器的值是父级组件初次渲染完之后传入的。 <strong>editor</strong> rocks 😀</p>';
    this.foo1.set(html);
  }

  getFoo2 = () => {
    console.log(this.foo2.get());
  }

  getFoo3ToFoo4 = () => {
    const html = this.foo3.get();
    this.foo4.set(html);
  }

  render() {
    const style = {
      padding: 20,
    };

    return (
      <div style={style}>
        <p>富文本编辑器 eact-draft-wysiwyg</p>
        <p>
          <button onClick={this.getFoo2} style={{ marginRight: 50 }}>获取第二个编辑器的值</button>
          <button onClick={this.getFoo3ToFoo4}>将第三个编辑器的值同步到第四个编辑器</button>
        </p>

        <MyEditor ref={(r) => { this.foo1 = r; }} />
        <MyEditor ref={(r) => { this.foo2 = r; }} />
        <MyEditor ref={(r) => { this.foo3 = r; }} />
        <MyEditor ref={(r) => { this.foo4 = r; }} />
      </div>
    );
  }
}

export { HelloEditor };
