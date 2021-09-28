import { combineReducers } from 'redux';
import UI from './UI';
import categoriesSlice from '@store/reducers/categoriesSlice';
import productsSlice from '@store/reducers/productsSlice';

export default combineReducers({
  UI,
  categories: categoriesSlice,
  products: productsSlice,
});
