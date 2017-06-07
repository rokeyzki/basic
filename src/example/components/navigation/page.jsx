import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Store from '../../store';
import navigationAction from '../../actions/navigation';

class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Store.getState().navigationState,
    };

    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    Store.subscribe(() => {
      this.setState({
        data: Store.getState().navigationState,
      });
    });

    this.updateState();

    // 异步请求测试 start
    function requestApi(url) {
      return new Promise((resolve, reject) => { // resolve 触发成功钩子、reject 触发失败狗子
        // 示例：使用 fetch 请求资源（IE9 不支持 fetch 的跨域请求）
        // fetch(
        //   `//offline-news-api.herokuapp.com/${url}`,
        // ).then((response) => {
        //   if (response.status >= 400) {
        //     console.error('Bad response from server');
        //     reject(response.status);
        //   } else {
        //     console.dir(response);
        //     resolve(response.json());
        //   }
        // });

        // 示例：使用 axios 请求资源
        axios(
          `//offline-news-api.herokuapp.com/${url}`,
        ).then((response) => {
          if (response.status >= 400) {
            console.error('Bad response from server');
            reject(response.status);
          } else { // axios 返回的数据结构与fetch不同
            console.dir(response);
            resolve(response.data);
          }
        });
      });
    }

    async function test() {
      await requestApi('stories')
      .then((v) => {
        console.dir(v);
      })
      .catch((v) => {
        console.error(`catch: ${v}`);
      });

      // await requestApi('ddddddd')
      // .then((v) => {
      //   console.dir(v);
      // })
      // .catch((v) => {
      //   console.error(`catch: ${v}`);
      // });
    }

    test();
    // 异步请求测试 end
  }

  shouldComponentUpdate(nextProps) {
    console.log('Page: shouldComponentUpdate');

    if (this.props.match.params.pageId !== nextProps.match.params.pageId) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    console.log('组件 Page 已重新渲染');
    this.updateState();
  }

  updateState() {
    let allow = false;
    const chapterIndex = this.props.match.params.chapterId - 1;
    const pageIndex = this.props.match.params.pageId - 1;
    const isHideBar = !!(this.props.location.query && this.props.location.query.isHideBar);

    let theChapter = this.state.data.getIn(['chapterList', chapterIndex]);
    if (theChapter) { // chapter 存在
      theChapter = theChapter.toJS();
      const thePage = theChapter.pageList[pageIndex];
      if (thePage) { // page 存在
        const allowPages = +theChapter.allowPages;
        if (allowPages > 0) {
          if (allowPages > pageIndex) { // 有权限访问
            allow = true;
          } else { // 无权限访问
            console.error('无权限访问');
          }
        } else { // 有权限访问
          allow = true;
        }
      } else { // page 不存在
        console.error('page 不存在');
      }
    } else { // chapter 不存在
      console.error('chapter 不存在');
    }

    if (allow) {
      console.log('触发 changePageIndexActive', chapterIndex, pageIndex);
      Store.dispatch(navigationAction.changePageIndexActive(chapterIndex, pageIndex, isHideBar));
    } else {
      window.open('/', '_self');
    }
  }

  render() {
    const match = this.props.match;

    return (
      <div>
        <span>章：{match.params.chapterId} 页：{match.params.pageId}</span>
      </div>
    );
  }
}

Page.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export { Page };
