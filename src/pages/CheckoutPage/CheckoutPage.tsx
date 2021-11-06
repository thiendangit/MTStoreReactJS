import React, { useEffect } from 'react';
import './CheckoutPage.css';
import { InfoCustomer } from './components/InfoCustomer';
import { PaymentMethod } from './components/PaymentMethod';
import { Confirm } from './components/Confirm';
import { OrderSummary } from './components/OrderSummary';
import { OrderSummaryPrice } from './components/OrderSummaryPrice';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCart, CartProduct, getCartState } from '@store/reducers/cartSlice';
import { Product } from 'WooCommerce';

export const CheckoutPage = () => {
  const cart = useSelector(getCartState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCart.getTotals());
  }, [cart]);

  const handleRemoveFromCart = (cartItem: Product) => {
    dispatch(actionsCart.removeFromCart(cartItem));
  };
  const onChangeQuantity = (quantity: number, product: CartProduct) => {
    dispatch(actionsCart.addOneToCartWithQty({ product, quantity }));
  };

  return (
    <div className="grid grid-cols-2 gap-14">
      <div className="flex flex-col gap-6">
        <InfoCustomer />
        <PaymentMethod />
        <Confirm />
      </div>
      <div>
        <OrderSummary onChangeQuantity={onChangeQuantity} data={cart.cartItems} remove={handleRemoveFromCart} />
        <OrderSummaryPrice cartTotalPrice={cart.cartTotalAmount} />
      </div>
    </div>
  );
};
