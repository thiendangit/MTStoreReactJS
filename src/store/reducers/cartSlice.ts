import { RootState } from '../configureStore';
import { Product } from 'WooCommerce';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { handleProductPrice } from '@utils/handleProductPrice';

export type State = {
  cartItems: CartProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  isLoading: boolean;
};

export type CartProduct = Product & {
  cartInf: {
    quantity: number;
    height?: number;
    color?: number;
    size?: number;
  };
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
        state.cartItems[itemIndex].cartInf.quantity += 1;
      } else {
        const tempProducts = { ...payload, cartInf: { quantity: 1 } };
        state.cartItems.push(tempProducts);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseOneCart: (state, { payload }: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === payload.id);
      if (state.cartItems[itemIndex].cartInf.quantity > 1) {
        state.cartItems[itemIndex].cartInf.quantity -= 1;
      } else if (state.cartItems[itemIndex].cartInf.quantity === 1) {
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
    getTotals: (state) => {
      const { quantity, total_price } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { cartInf } = cartItem;
          const { sale_price } = handleProductPrice(cartItem);
          const itemPriceTotal = sale_price * cartInf.quantity;
          cartTotal.total_price += itemPriceTotal;
          cartTotal.quantity += cartInf.quantity;
          return cartTotal;
        },
        {
          quantity: 0,
          total_price: 0,
        },
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total_price;
    },
  },
});

const { reducer } = cartSlice;

export const { addOneToCart, decreaseOneCart, removeFromCart, clearCart, getTotals } = cartSlice.actions;

export const getCartState = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart,
);

export default reducer;
