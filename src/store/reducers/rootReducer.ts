import { combineReducers } from 'redux';
import UI from './UI';
import categoriesSlice from '@store/reducers/categoriesSlice';

export default combineReducers({
  UI,
  categories: categoriesSlice,
});
