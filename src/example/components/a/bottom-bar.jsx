import React from 'react';
import { Link } from 'react-router-dom';

import Store from '../../store';
import navigationAction from '../../actions/navigation';

import style from './style.scss';

class BottomBar extends React.PureComponent {
  static toggleStatus(type) {
    if (type === 'up') Store.dispatch(navigationAction.changeBottomBarActive(true));
    else Store.dispatch(navigationAction.changeBottomBarActive(false));
  }

  static showSidebar() {
    Store.dispatch(navigationAction.changeSideBarActive(true));
  }

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
    console.log('BottomBar: shouldComponentUpdate');

    if (this.state.data.get('bottomBar') !== nextState.data.get('bottomBar')) {
      return true;
    }

    if (this.state.data.get('chapterList') !== nextState.data.get('chapterList')) {
      return true;
    }

    if (this.state.data.get('thisChapter') !== nextState.data.get('thisChapter')) {
      return true;
    }

    if (this.state.data.get('thisPage') !== nextState.data.get('thisPage')) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    console.log('组件 BottomBar 已重新渲染');
  }

  render() {
    const active = this.state.data.getIn(['bottomBar', 'active']);
    const upZoneDisplay = active ? 'block' : 'none';
    const downZoneDisplay = !active ? 'block' : 'none';

    const nowChapter = this.state.data.get('thisChapter');
    const allowPages = +this.state.data.getIn(['chapterList', nowChapter, 'allowPages']);
    const pageList = this.state.data.getIn(['chapterList', nowChapter, 'pageList']).toArray();
    const pagesIndex = +this.state.data.get('thisPage');
    const pagesNum = pagesIndex + 1;
    const pagesTotal = pageList.length;
    const progressPercent = (+pagesNum / +pagesTotal).toFixed(4) * 100;

    return (
      <div>
        <div className={style.mask} style={{ display: upZoneDisplay }} onClick={() => { BottomBar.toggleStatus('down'); }} />
        <div
          className={style.progress}
          style={{
            display: upZoneDisplay,
            width: `${progressPercent}%`,
          }}
        />
        <div className={style.bottomBar}>
          <div className={style.upZone} style={{ display: upZoneDisplay }}>
            <div className={style.leftZone} onClick={BottomBar.showSidebar}>目录</div>
            <div className={style.rightZone}>
              <span className={(pagesNum === 1) ? style.disabled : ''}>
                {
                  (pagesNum === 1) ? '上一页' :
                  <Link to={`/chapter/${nowChapter + 1}/page/${pagesNum - 1}`}>上一页</Link>
                }
              </span>
              <span>
                <span>{pagesNum}</span>/{pagesTotal}
              </span>
              <span className={(pagesNum === pagesTotal || (pagesNum >= allowPages && allowPages > 0)) ? style.disabled : ''} >
                {
                  (pagesNum === pagesTotal || (pagesNum >= allowPages && allowPages > 0)) ? '下一页' :
                  <Link to={`/chapter/${nowChapter + 1}/page/${pagesNum + 1}`}>下一页</Link>
                }
              </span>
            </div>
          </div>
          <div className={style.downZone} style={{ display: downZoneDisplay }} onClick={() => { BottomBar.toggleStatus('up'); }} />
        </div>
      </div>
    );
  }
}

export { BottomBar };
