// store
// 一个页面只会对应一个store

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'; // 这个中间件使得store.dispatch方法可以接受 Promise 对象作为参数，即支持异步操作

// 一个store只会有一个reducer
const reducer = (state, action) => { // reducer：负责状态的最终更新
  switch (action.type) {
    case 'UPDATE_DATA':
      return Object.assign({}, state, {
        data: action.value,
      });

    default:
      return state;
  }
};

// initial 初始状态
const initialState = {
  foo: 'hello rudex',
  data: 2,
};

const store = createStore(reducer, initialState, applyMiddleware(promiseMiddleware));

export default store;
