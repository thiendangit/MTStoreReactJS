import { Product } from 'WooCommerce';
import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';

export const UnitSelect = ({ item }: { item: Product }) => {
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
      <ButtonBase className="add__product-btn md:ml-8 ml-0 w-3/4 md:w-max">
        <AddOutlined fontSize={'large'} style={{ color: 'var(--white)', fontWeight: 'bolder' }} />
        <p className="text__add-btn">Add to cart</p>
      </ButtonBase>
    </div>
  );
};
