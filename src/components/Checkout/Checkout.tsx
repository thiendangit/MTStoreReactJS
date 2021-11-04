import React, { useEffect } from 'react';
import './Checkout.css';
import { InforCustomer } from './components/InforCustomer';
import { PaymentMethod } from './components/PaymentMethod';
import { Confirm } from './components/Confirm';
import { OrderSummary } from './components/OrderSummary';
import { OrderSummaryPrice } from './components/OrderSummaryPrice';
import { useDispatch, useSelector } from 'react-redux';
import { getCartState, getTotals, removeFromCart } from '@store/reducers/cartSlice';
import { Product } from 'WooCommerce';

export const Checkout = () => {
  const cart = useSelector(getCartState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveFromCart = (cartItem: Product) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="grid grid-cols-2 gap-14">
      <div className="flex flex-col gap-6">
        <InforCustomer />
        <PaymentMethod />
        <Confirm />
      </div>
      <div>
        <OrderSummary data={cart.cartItems} remove={handleRemoveFromCart} />
        <OrderSummaryPrice cartTotalPrice={cart.cartTotalAmount} />
      </div>
    </div>
  );
};
