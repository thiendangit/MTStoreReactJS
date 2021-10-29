import React, { useEffect } from 'react';
import './CartDetail.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addOneToCart,
  clearCart,
  decreaseOneCart,
  getCartState,
  getQuantityTotals,
  removeFromCart,
} from '@store/reducers/cartSlice';
import { Product } from 'WooCommerce';
import { images } from '@public/image';
import { handleProductPrice } from '@utils/handleProductPrice';

export const CartDetail = () => {
  const cart = useSelector(getCartState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuantityTotals());
  }, [cart]);

  const handleRemoveFromCart = (carItem: Product) => {
    dispatch(removeFromCart(carItem));
  };
  const handleDecreaseCart = (carItem: Product) => {
    dispatch(decreaseOneCart(carItem));
  };
  const handleIncreaseCart = (carItem: Product) => {
    dispatch(addOneToCart(carItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
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
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3>Your cart is currently empty</h3>
            <div className="start-shopping">
              <Link to="/">
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => {
              const { sale_price } = handleProductPrice(cartItem);
              return (
                <div key={cartItem?.id} className="cart-item">
                  <div className="cart-product">
                    <img
                      src={cartItem?.images?.[0]?.src ? cartItem?.images?.[0]?.src : `${images.noImg}`}
                      alt={cartItem?.name}
                    />
                    <div>
                      <h4>{cartItem?.name}</h4>
                      {/*<div*/}
                      {/*  dangerouslySetInnerHTML={{ __html: cartItem?.description }}*/}
                      {/*  className="product__list-item-desc mt-auto w-full truncate break-all"*/}
                      {/*/>*/}
                      <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                    </div>
                  </div>
                  <div className="cart-product-price">$ {cartItem?.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem?.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">$ {sale_price * cartItem?.cartQuantity}</div>
                </div>
              );
            })}
          </div>
        )}
        <div className="cart-summary">
          <button className="clear-cart" onClick={() => handleClearCart()}>
            Clear cart
          </button>
          <div className="cart-checkout">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span className="amount">$ .........</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button>Checkout</button>
            <div className="continue-shopping">
              <Link to="/">
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
