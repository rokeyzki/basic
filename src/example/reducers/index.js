import { combineReducers } from 'redux';

import demoReducer from './demoReducer';
import fooReducer from './fooReducer';
import navigationReducer from './navigation-reducer';

const reducers = combineReducers({
  demoState: demoReducer,
  dooState: fooReducer,
  navigationState: navigationReducer,
});

export default reducers;
