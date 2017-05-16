import * as types from './types';

const action = {
  changeBottomBarActive(status) {
    return {
      type: types.NAVIGATION_BOTTOMBAR_UPDATE_ACTIVE,
      value: status,
    };
  },
  changeSideBarActive(status) {
    return {
      type: types.NAVIGATION_SIDEBAR_UPDATE_ACTIVE,
      value: status,
    };
  },
  changePageIndexActive(chapterIndex, pageIndex, isHideBar = false) {
    return {
      type: types.NAVIGATION_CHANGE_PAGE_INDEX,
      chapterIndex,
      pageIndex,
      isHideBar,
    };
  },
};

export default action;
