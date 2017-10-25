import React from 'react';
import PropTypes from 'prop-types';

import Store from '../../store';
import syncAction from '../../actions/demoSync';

class Topic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Store.getState().demoState,
    };
  }

  componentWillMount() {
    Store.subscribe(() => {
      this.setState({
        data: Store.getState().demoState,
      });
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.match.params.topicId !== nextProps.match.params.topicId) {
      console.log('组件 Topic 触发 shouldComponentUpdate');
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    console.log('组件 Topic 已重新渲染，在这里触发 action 去更新state');
    Store.dispatch(syncAction.change(Math.random()));
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
}

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Topic;
