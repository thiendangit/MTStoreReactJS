import { RootState } from '../configureStore';
import { Product } from 'WooCommerce';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  cartItems: CartProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  isLoading: boolean;
};

export type CartProduct = Product & {
  cartQuantity: number;
};

export const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
} as State;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOneToCart: (state, { payload }: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProducts = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempProducts);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseOneCart: (state, { payload }: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === payload.id);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== payload.id);
        state.cartItems = nextCartItems;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, { payload }: PayloadAction<Product>) => {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== payload.id);
      state.cartItems = nextCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getQuantityTotals: (state) => {
      const { quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { cartQuantity } = cartItem;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          quantity: 0,
        },
      );
      state.cartTotalQuantity = quantity;
    },
  },
});

const { reducer } = cartSlice;

export const { addOneToCart, decreaseOneCart, removeFromCart, clearCart, getQuantityTotals } = cartSlice.actions;

export const getCartState = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart,
);

export default reducer;
