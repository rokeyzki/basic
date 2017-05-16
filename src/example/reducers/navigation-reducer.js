import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  headerBar: {
    active: true,
    text: '正在预览课程免费体验部分',
    button: {
      text: '点击购买',
      url: 'http://baidu.com',
    },
  },
  bottomBar: {
    active: false,
  },
  sideBar: {
    active: false,
  },
  thisChapter: 0,
  thisPage: 0,
  chapterList: [
    {
      num: '一',
      title: '如何避免鸡同鸭讲的悲剧',
      allowPages: 8, // 可看的页数，非索引值
      sectionList: [
        {
          title: '什么是有效聆听',
          type: 2,
          range: [1, 1],
        },
        {
          title: '为什么聆听如此困难',
          type: 1,
          range: [2, 5],
        },
        {
          title: '一些经典的误会 - 失败案例',
          type: 2,
          range: [6, 6],
        },
        {
          title: '分享你的血泪史',
          type: 1,
          range: [7, 9],
        },
        {
          title: '如何避免聆听误会 - 成功案例',
          type: 2,
          range: [10, 10],
        },
        {
          title: '你的练习：复述＆澄清',
          type: 1,
          range: [11, 17],
        },
        {
          title: '学习回顾',
          type: 3,
          range: [18, 18],
        },
      ],
      pageList: [
        {
          type: 1,
          isRead: true, // 是否已看
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 2,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
        {
          type: 1,
          isRead: false,
        },
      ],
    },
  ],
});

let nextState;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATION_BOTTOMBAR_UPDATE_ACTIVE': // 更新底部导航的活跃状态
      // nextState = state.updateIn(['bottomBar', 'active'], value => !value);
      nextState = state.setIn(['bottomBar', 'active'], action.value);
      return nextState;

    case 'NAVIGATION_SIDEBAR_UPDATE_ACTIVE': // 更新侧边导航的活跃状态
      nextState = state.setIn(['sideBar', 'active'], action.value);
      return nextState;

    case 'NAVIGATION_CHANGE_PAGE_INDEX': // 更新当前的所在页数
      nextState = state.setIn(['chapterList', action.chapterIndex, 'pageList', action.pageIndex, 'isRead'], true);
      nextState = nextState.set('thisChapter', action.chapterIndex);
      nextState = nextState.set('thisPage', action.pageIndex);
      if (action.isHideBar) {
        nextState = nextState.setIn(['sideBar', 'active'], false);
        nextState = nextState.setIn(['bottomBar', 'active'], false);
      }

      return nextState;

    default:
      return state;
  }
};

export default reducer;
