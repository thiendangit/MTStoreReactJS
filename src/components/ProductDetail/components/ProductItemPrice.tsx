import { Product } from 'WooCommerce';
import React from 'react';
import { handleProductPrice } from '@utils/handleProductPrice';
import CONFIG from '@constants/config';

export const ProductItemPrice = ({ item }: { item: Product }) => {
  const { regular_price, sale_price } = handleProductPrice(item);

  return (
    <div>
      {/*current price*/}
      <p className="text__price-product">
        {sale_price?.toString()} {CONFIG.product.unit.long}
      </p>
      {/*regular price*/}
      {regular_price != 0 && (
        <p className="text__price-sale line-through">
          {regular_price?.toString()} {CONFIG.product.unit.long}
        </p>
      )}
    </div>
  );
};
