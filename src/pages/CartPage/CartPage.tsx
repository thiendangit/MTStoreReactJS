import React, { ChangeEvent, useEffect } from 'react';
import './CartPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionsCart,
  addOneToCart,
  CartProduct,
  clearCart,
  decreaseOneCart,
  getCartState,
  getTotals,
  removeFromCart,
  selectedAllToCart,
  selectedOneToCart,
} from '@store/reducers/cartSlice';
import { Product } from 'WooCommerce';
import { handleProductPrice } from '@utils/handleProductPrice';
import { CartSummary } from './components/CartSummary';
import { EmptyCart } from './components/EmptyCart';
import { CartItemsList } from './components/CartItemsList';

export const CartPage = () => {
  const cart = useSelector(getCartState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveFromCart = (cartItem: Product) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem: Product) => {
    dispatch(decreaseOneCart(cartItem));
  };
  const handleIncreaseCart = (cartItem: Product) => {
    dispatch(addOneToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleSelectedProduct = (cartItem: Product) => {
    dispatch(
      selectedOneToCart({
        product: cartItem,
      }),
    );
  };
  const handleSelectedAllProduct = () => {
    dispatch(selectedAllToCart());
  };

  const onChangeQuantity = (quantity: number, product: CartProduct) => {
    dispatch(actionsCart.addOneToCartWithQty({ product, quantity }));
  };

  const onClickAll = () => handleSelectedAllProduct();

  const cartList = () => {
    return (
      <>
        {cart.cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => {
              const { sale_price } = handleProductPrice(cartItem);
              const onClickDecreaseCart = () => handleDecreaseCart(cartItem);
              const onClickIncreaseCart = () => handleIncreaseCart(cartItem);
              const onClickSelectedProduct = () => handleSelectedProduct(cartItem);
              const onClickRemoveFromCart = () => handleRemoveFromCart(cartItem);
              const _onChangeQuantity = (onChangeProps: ChangeEvent<HTMLInputElement>) => {
                onChangeQuantity(parseInt(onChangeProps?.target?.value ? onChangeProps?.target?.value : '0'), cartItem);
              };
              return (
                <CartItemsList
                  key={cartItem.id}
                  sale_price={sale_price}
                  item={cartItem}
                  onClickSelectedProduct={onClickSelectedProduct}
                  onClickRemoveFromCart={onClickRemoveFromCart}
                  onClickDecreaseCart={onClickDecreaseCart}
                  onClickIncreaseCart={onClickIncreaseCart}
                  _onChangeQuantity={_onChangeQuantity}
                />
              );
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div>
        <div className="titles">
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
        {cartList()}
        <CartSummary
          cartTotalQuantity={cart.cartTotalQuantity}
          cartTotalAmount={cart.cartTotalAmount}
          onClickAll={onClickAll}
          onClickClearAll={handleClearCart}
        />
      </div>
    </div>
  );
};
