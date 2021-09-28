import {
  createSlice,
  createSelector,
  PayloadAction,
  // createAsyncThunk
} from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { Product } from 'WooCommerce';

export type State = {
  productsItems: Product[];
  isLoading: boolean;
};

export const initialState = {
  productsItems: [],
  isLoading: true,
} as State;

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    onSetProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.productsItems = payload;
    },
    onSetLoadingProducts: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

const { reducer } = productsSlice;

export const { onSetProducts, onSetLoadingProducts } = productsSlice.actions;

export const getProductsByCategories = createSelector(
  (state: RootState) => state.products.productsItems,
  (productsItems) => productsItems,
);
export const getProductsState = createSelector(
  (state: RootState) => state.products,
  (products) => products,
);

export default reducer;
