import { RootState } from '../configureStore';
import { Product } from 'WooCommerce';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { handleProductPrice } from '@utils/handleProductPrice';

export type State = {
  cartItems: CartProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  isLoading: boolean;
  is_all: boolean;
};

export type CartProduct = Product & {
  cartInf: {
    quantity: number;
    height?: number;
    color?: number;
    size?: number;
    is_selected?: boolean;
  };
};

export const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  is_all: false,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
} as State;

export type ProductSelectedPayload = {
  product: Product;
  is_selected?: boolean;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    selectedOneToCart: (state, { payload }: PayloadAction<ProductSelectedPayload>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === payload.product.id);
      if (itemIndex >= 0) {
        if (payload.is_selected != undefined) {
          state.cartItems[itemIndex].cartInf.is_selected = payload.is_selected;
        } else {
          state.cartItems[itemIndex].cartInf.is_selected = !state.cartItems[itemIndex].cartInf.is_selected;
        }
      }
    },
    selectedAllToCart: (state, { payload }: Partial<PayloadAction<Pick<ProductSelectedPayload, 'is_selected'>>>) => {
      state.cartItems.map((item, itemIndex) => {
        if (payload?.is_selected != undefined) {
          state.cartItems[itemIndex].cartInf.is_selected = true;
        } else {
          state.cartItems[itemIndex].cartInf.is_selected = !state.is_all;
        }
      });
      state.is_all = !state.is_all;
    },
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
          const itemPriceTotal = cartInf.is_selected === true ? sale_price * cartInf.quantity : 0;
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

export const {
  selectedOneToCart,
  selectedAllToCart,
  addOneToCart,
  decreaseOneCart,
  removeFromCart,
  clearCart,
  getTotals,
} = cartSlice.actions;

export const getCartState = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart,
);

export default reducer;
