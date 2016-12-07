import Store from './containers/store';

import A1 from './containers/actions/a1';

console.log(Store.getState()); // 获取state

setTimeout(() => {
  Store.dispatch(A1.change(8)); // 通过action更新state
}, 3000);

Store.subscribe(() => { // 监听state的变化
  console.log(Store.getState());
});
