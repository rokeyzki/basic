// HOC 高阶组件
import React from 'react';

export default function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    componentWillMount() {
      console.log('HOC 高阶组件');
    }

    // React v16.0 新增生命周期：componentDidCatch
    componentDidCatch(error, info) {
      console.log('在子组件渲染异常后调用', error);
      // componentDidCatch 是包含错误堆栈的 info 对象，这将告诉你组件在哪里失效
      if (info && info.componentStack) console.log(info.componentStack);
    }

    render() {
      return (
        <div style={{ backgroundColor: '#e3e3e3' }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

