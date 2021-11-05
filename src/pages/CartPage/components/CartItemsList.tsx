import React from 'react';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { images } from '@public/image';
import { Clear } from '@material-ui/icons';
import { CartProduct } from '@store/reducers/cartSlice';

interface CartItemsListProps {
  sale_price: number;
  item: CartProduct;
  onClickSelectedProduct: any;
  onClickRemoveFromCart: any;
  onClickDecreaseCart: any;
  onClickIncreaseCart: any;
  _onChangeQuantity: any;
}
export const CartItemsList: React.FC<CartItemsListProps> = ({
  sale_price,
  item,
  onClickSelectedProduct,
  onClickRemoveFromCart,
  onClickDecreaseCart,
  onClickIncreaseCart,
  _onChangeQuantity,
}) => {
  return (
    <div key={item?.id} className="cart-item">
      <div className="cart-product">
        <FormControlLabel
          control={
            <Checkbox
              onClick={onClickSelectedProduct}
              size={'medium'}
              style={{ color: 'var(--orange)' }}
              checked={!!item?.cartInf?.is_selected}
            />
          }
          label={''}
        />
        <img src={item?.images?.[0]?.src ? item?.images?.[0]?.src : `${images.noImg}`} alt={item?.name} />
        <div>
          <h4>{item?.name}</h4>
          {/*<div*/}
          {/*  dangerouslySetInnerHTML={{ __html: cartItem?.description }}*/}
          {/*  className="product__list-item-desc mt-auto w-full truncate break-all"*/}
          {/*/>*/}
          <button onClick={onClickRemoveFromCart}>
            {' '}
            <Clear fontSize={'medium'} /> Remove
          </button>
        </div>
      </div>
      <div className="cart-product-price">$ {sale_price ? sale_price : 0}</div>
      <div className="cart-product-quantity">
        <button onClick={onClickDecreaseCart}>-</button>
        <TextField
          // defaultValue={item?.cartInf.quantity}
          value={item?.cartInf.quantity}
          onChange={_onChangeQuantity}
          inputProps={{ style: { textAlign: 'center', fontSize: 16, fontWeight: 'bold' } }}
        />
        <button onClick={onClickIncreaseCart}>+</button>
      </div>
      <div className="cart-product-total-price">$ {sale_price * item?.cartInf.quantity}</div>
    </div>
  );
};
