import { Product } from 'WooCommerce';
import React from 'react';

interface UnitSelectProps {
  item: Product;
}

export const UnitSelect: React.FC<UnitSelectProps> = ({ item }) => {
  return (
    <div className="select__input-styled w-3/4 md:w-max">
      <input type="text" className="input-styled" placeholder="1" />
      <span className="line__box" />
      {item?.weight === '' && (
        <select name="Pcs" className="select-styled">
          <option value="Pcs">Pcs</option>
        </select>
      )}
    </div>
  );
};
