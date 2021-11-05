import { Product } from 'WooCommerce';
import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addOneToCart } from '@store/reducers/cartSlice';

interface UnitSelectProps {
  item: Product;
}

export const UnitSelect: React.FC<UnitSelectProps> = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddOneToCart = () => {
    dispatch(addOneToCart(item));
  };
  return (
    <div className="flex flex-row md:flex-nowrap flex-wrap gap-3 justify-start items-stretch">
      <div className="select__input-styled w-3/4 md:w-max">
        <input type="text" className="input-styled" placeholder="1" />
        <span className="line__box" />
        {item?.weight === '' && (
          <select name="Pcs" className="select-styled">
            <option value="Pcs">Pcs</option>
          </select>
        )}
      </div>
      <ButtonBase className="add__product-btn md:ml-8 ml-0 w-3/4 md:w-max" onClick={handleAddOneToCart}>
        <AddOutlined fontSize={'large'} style={{ color: 'var(--white)', fontWeight: 'bolder' }} />
        <p className="text__add-btn">Add to cart</p>
      </ButtonBase>
    </div>
  );
};
