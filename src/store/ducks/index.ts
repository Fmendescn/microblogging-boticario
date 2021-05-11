import { combineReducers } from 'redux';

import blog from './blog';
import auth from './auth';
import feed from './feed';

export default combineReducers({
  blog,
  auth,
  feed,
});
