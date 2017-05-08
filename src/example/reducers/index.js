import { combineReducers } from 'redux';

import demoReducer from './demoReducer';
import fooReducer from './fooReducer';

const reducers = combineReducers({
  demoState: demoReducer,
  dooState: fooReducer,
});

export default reducers;
