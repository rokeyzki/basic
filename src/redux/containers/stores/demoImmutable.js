// Store 负责状态的处理

// 一个页面只会对应一个store
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'; // 这个中间件使得store.dispatch方法可以接受 Promise 对象作为参数，即支持异步操作
import { Map as iMap } from 'immutable'; // Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。

// 一个store只会有一个reducer
const reducer = (state, action) => { // reducer：负责状态的最终更新
  switch (action.type) {
    case 'UPDATE_DATA':
      return state.set('data', action.value);

    default:
      return state;
  }
};

// initial 初始状态（数据结构骨架）
const initialState = iMap({
  foo: 'hello redux',
  data: 2,
});

const store = createStore(reducer, initialState, applyMiddleware(promiseMiddleware));

export default store;
