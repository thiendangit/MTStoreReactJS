import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { KeyboardBackspaceOutlined, RemoveShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface CartSummaryProps {
  cartTotalQuantity: number;
  cartTotalAmount: number;
  onClickAll: any;
  onClickClearAll: any;
}
export const CartSummary: React.FC<CartSummaryProps> = ({
  cartTotalQuantity,
  cartTotalAmount,
  onClickAll,
  onClickClearAll,
}) => {
  return (
    <div className="cart-summary">
      <div>
        <FormControlLabel
          control={<Checkbox onClick={onClickAll} style={{ color: 'var(--orange)', fontSize: '2rem !important' }} />}
          label={''}
        />
        <span className="cart-checkbox">Select All( {cartTotalQuantity.toString()} )</span>
        <button className="clear-cart" onClick={onClickClearAll}>
          {' '}
          <RemoveShoppingCartOutlined fontSize={'medium'} /> Clear cart
        </button>
      </div>
      <div className="cart-checkout">
        <div className="cart-subtotal">
          <span>Subtotal</span>
          <span className="amount">$ {cartTotalAmount}</span>
        </div>
        <p>Taxes and shipping calculated at checkout</p>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
        <div className="continue-shopping">
          <Link to="/">
            <span>
              {' '}
              <KeyboardBackspaceOutlined fontSize={'large'} /> Continue Shopping
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
