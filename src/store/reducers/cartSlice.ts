import { RootState } from '../configureStore';
import { Category } from 'WooCommerce';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  cartItems: Category[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  isLoading: boolean;
};

export const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading: true,
} as State;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Category[]>) => {
      state.cartItems = payload;
      // const itemIndex = state.cartItems.findIndex((item) => item.name === payload.id);
      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      // } else {
      //   const tempProducts = { ...payload, cartQuantity: 1 };
      //   state.cartItems.push(tempProducts);
      // }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

const { reducer } = cartSlice;

export const { addToCart } = cartSlice.actions;

export const getCartState = createSelector(
  (state: RootState) => state.products,
  (cart) => cart,
);

export default reducer;
