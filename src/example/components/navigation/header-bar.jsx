import React from 'react';

import Store from '../../store';

import style from './style.scss';

class HeaderBar extends React.PureComponent {
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
    if (this.state.data.get('headerBar') !== nextState.data.get('headerBar')) {
      return true;
    }

    return false;
  }

  render() {
    const display = this.state.data.getIn(['headerBar', 'active']) ? 'block' : 'none';
    const headerText = this.state.data.getIn(['headerBar', 'text']);
    const buttonText = this.state.data.getIn(['headerBar', 'button', 'text']);

    return (
      <div className={style.headerBar} style={{ display }}>
        <span className={style.text}>{headerText}</span>
        <div>
          <span className={style.button}>{buttonText}</span>
        </div>
      </div>
    );
  }
}

export { HeaderBar };
