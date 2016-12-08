import Store from './containers/store';

import A2 from './containers/actions/a2';

console.log(Store.getState()); // 获取state

setTimeout(() => {
  Store.dispatch(A2.group()); // 通过action更新state
}, 3000);

Store.subscribe(() => { // 监听state的变化
  console.log(Store.getState());
});
