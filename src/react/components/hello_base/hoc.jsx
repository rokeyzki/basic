// HOC 高阶组件
import React from 'react';

export default function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    componentWillMount() {
      console.log('HOC 高阶组件');
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

