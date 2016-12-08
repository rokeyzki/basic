// store
// 一个页面只会有一个store

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'; // 这个中间件使得store.dispatch方法可以接受 Promise 对象作为参数，即支持异步操作

import R1 from './reducers/r1';

// const defaultState = {
//   foo: 'hello rudex',
//   data: 2,
// };

const store = createStore(R1, applyMiddleware(promiseMiddleware));

export default store;
