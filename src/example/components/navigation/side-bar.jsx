import React from 'react';
import { Link } from 'react-router-dom';

import Store from '../../store';
import navigationAction from '../../actions/navigation';

import style from './style.scss';

class SideBar extends React.PureComponent {
  static hideSidebar() {
    Store.dispatch(navigationAction.changeSideBarActive(false));
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
    console.log('SideBar: shouldComponentUpdate');

    if (this.state.data.get('sideBar') !== nextState.data.get('sideBar')) {
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
    console.log('组件 SideBar 已重新渲染');
  }

  render() {
    const display = this.state.data.getIn(['sideBar', 'active']) ? 'block' : 'none';
    const isShowHeaderBar = this.state.data.getIn(['headerBar', 'active']);

    const chapterList = this.state.data.get('chapterList').toJS();
    const nowChapter = this.state.data.get('thisChapter');
    const thisPage = this.state.data.get('thisPage');

    function getSideBarList() {
      const fooList = [];
      let allSectionTotal = 0;

      chapterList.forEach((itemC, iC) => {
        const thisChapter = itemC;

        itemC.sectionList.forEach((itemS, iS) => {
          const thisSection = itemS;
          thisSection.isNow = false;

          if (itemS.range[0] < itemC.allowPages || itemC.allowPages === 0) { // 可看 1
            let isRead = false;
            let isOver = true;
            for (let i = itemS.range[0]; i - 1 < itemS.range[1]; i += 1) {
              if (itemC.pageList[i].isRead) isRead = true;
              else isOver = false;
            }

            if (isRead) { // 有看 3
              if (isOver) { // 看完 4
                thisSection.status = 4;
              } else { // 未完 5
                thisSection.status = 5;
              }

              if (nowChapter === iC
                && itemS.range[0] <= thisPage && thisPage <= itemS.range[1]) { // 正看 6
                thisSection.isNow = true;
              }
            } else { // 没看 2
              thisSection.status = 2;
            }
          } else { // 禁看 0
            thisSection.status = 0;
          }

          thisChapter.sectionList[iS] = thisSection;
        });

        fooList[iC] = thisChapter;
        allSectionTotal += thisChapter.sectionList.length;
      });

      return { fooList, allSectionTotal };
    }

    const sideBarList = getSideBarList().fooList; // console.dir(sideBarList);
    const allSectionTotal = getSideBarList().allSectionTotal; // 所有小节的总数

    function getTypeText(type) {
      let typeText;
      switch (+type) {
        case 1:
          typeText = '练习';
          break;
        case 2:
          typeText = '视频';
          break;
        case 3:
          typeText = '文本';
          break;
        default:
          typeText = '其它';
      }

      return typeText;
    }

    function getClassName(status) {
      let className;
      switch (+status) {
        case 0:
          className = 'disabled';
          break;
        case 4:
          className = 'markRead';
          break;
        default:
          className = '';
      }

      return className;
    }

    return (
      <div>
        <div
          className={style.shadow}
          style={{ display }}
          onClick={SideBar.hideSidebar}
        />
        <div className={style.sideBar} style={{ display }}>
          <section style={{ marginTop: (isShowHeaderBar) ? '40px' : '0' }}>
            <div className={style.header}>
              <div className={style.bigText}>目录</div>
              <div className={style.noteText}>共{sideBarList.length}章 {allSectionTotal}小节</div>
            </div>
            {
              sideBarList.map((itemC, iC) => (
                <div key={`chapter-${iC + 1}`}>
                  <Link
                    to={{
                      pathname: `/chapter/${iC + 1}/page/1`,
                      query: { isHideBar: true },
                    }}
                  >
                    <div className={style.chapter}>
                      <div className={style.leftNum}>{itemC.num}.</div>
                      <div className={style.leftZone}>{itemC.title}</div>
                      <div className={style.rightZone}>共{itemC.pageList.length}页</div>
                      <div className={style.clearflx} />
                    </div>
                  </Link>
                  {
                    itemC.sectionList.map((itemS, iS) => (
                      (itemS.status !== 0) ? (
                        <Link
                          to={{
                            pathname: `/chapter/${iC + 1}/page/${itemS.range[0] + 1}`,
                            query: { isHideBar: true },
                          }}
                          key={`section-${iS + 1}`}
                        >
                          <div
                            className={`
                              ${style.section} 
                              ${style[getClassName(itemS.status)]} 
                              ${itemS.isNow ? style.active : ''}`}
                          >
                            <div className={style.leftNum}>{iS + 1}.</div>
                            <div className={style.leftZone}>{itemS.title}</div>
                            <div className={style.rightZone}>
                              <span>
                                {getTypeText(itemS.type)}
                              </span>
                            </div>
                            <div className={style.clearflx} />
                          </div>
                        </Link>
                      ) : (
                        <div
                          className={`
                            ${style.section} 
                            ${style[getClassName(itemS.status)]} 
                            ${itemS.isNow ? style.active : ''}`}
                          key={`section-${iS + 1}`}
                        >
                          <div className={style.leftNum}>{iS + 1}.</div>
                          <div className={style.leftZone}>{itemS.title}</div>
                          <div className={style.rightZone}>
                            <span>
                              {getTypeText(itemS.type)}
                            </span>
                          </div>
                          <div className={style.clearflx} />
                        </div>
                      )
                    ))
                  }
                </div>
              ))
            }
          </section>
        </div>
      </div>
    );
  }
}

export { SideBar };
