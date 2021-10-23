import { Product } from 'WooCommerce';
import React from 'react';

const PercentComponent = ({ item }: { item: Product }) => {
  return (
    <div className="flex flex-row justify-start items-center relative">
      <p className="product__detail-percent-btn ml-5">{item?.sale_price}</p>
      <p className={item?.shipping_class !== '' ? 'product__detail-percent-btn ml-28' : 'hidden'}>
        {item?.shipping_class !== '' ? item?.shipping_class : null}
      </p>
    </div>
  );
};

export default PercentComponent;
