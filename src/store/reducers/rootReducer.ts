import { combineReducers } from 'redux';
import UI from './UI';
import categoriesSlice from '@store/reducers/categoriesSlice';
import productsSlice from '@store/reducers/productsSlice';
import cartSlice from '@store/reducers/cartSlice';

export default combineReducers({
  UI,
  categories: categoriesSlice,
  products: productsSlice,
  cart: cartSlice,
});
