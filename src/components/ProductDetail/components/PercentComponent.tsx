import { Product } from 'WooCommerce';
import React from 'react';
import { handleProductPrice } from '@utils/handleProductPrice';

export const PercentComponent = ({ item }: { item: Product }) => {
  const { percent } = handleProductPrice(item);

  return (
    <div className="flex flex-row justify-start items-center relative">
      {percent != 0 && <p className="product__detail-percent-btn ml-5">{item?.sale_price}</p>}
      {item?.shipping_class !== '' && <p className="product__detail-shipping-btn ml-28">{item?.shipping_class}</p>}
    </div>
  );
};
