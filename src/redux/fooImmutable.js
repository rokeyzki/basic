// 模拟视图层中的使用
import Store from './containers/stores/demoImmutable';

import syncAction from './containers/actions/sync';
import asyncAction from './containers/actions/async';

console.dir(Store.getState()); // 获取初始state
console.log(`state.data: ${Store.getState().get('data')}`);

// sync
setTimeout(() => {
  console.log('sync start');
  Store.dispatch(syncAction.change(8)); // 通过action同步更新state
  console.log('sync end');
}, 3000);

// async
setTimeout(() => {
  Store.dispatch(asyncAction.group()); // 通过action异步更新state
}, 3000);

Store.subscribe(() => { // 监听state的变化
  console.dir(Store.getState());
  console.log(`state.data: ${Store.getState().get('data')}`);
});
