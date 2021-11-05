import React from 'react';
import { Link } from 'react-router-dom';
import { KeyboardBackspaceOutlined } from '@material-ui/icons';

export const EmptyCart: React.FC = () => {
  return (
    <div className="cart-empty">
      <h3>Your cart is currently empty</h3>
      <div className="start-shopping">
        <Link to="/">
          <span>
            {' '}
            <KeyboardBackspaceOutlined fontSize={'large'} /> Start Shopping
          </span>
        </Link>
      </div>
    </div>
  );
};
