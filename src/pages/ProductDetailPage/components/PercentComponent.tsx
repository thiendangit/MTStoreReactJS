import { Product } from 'WooCommerce';
import React from 'react';
import { handleProductPrice } from '@utils/handleProductPrice';

export const PercentComponent = ({ item }: { item: Product }) => {
  const { percent } = handleProductPrice(item);

  return (
    <div className="flex flex-row justify-start gap-4 items-center">
      {percent != 0 && <p className="product__detail-percent-btn top-5 left-5">{percent}%</p>}
      {item?.shipping_class !== '' && (
        <p className="product__detail-shipping-btn top-5 left-24">{item?.shipping_class}</p>
      )}
    </div>
  );
};
