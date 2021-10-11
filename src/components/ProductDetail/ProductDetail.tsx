import React, { useState } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router';
import { Star, StarHalf } from '@material-ui/icons';
import { Product } from 'WooCommerce';
import { LocationState } from 'history';

export const ProductDetail = () => {
  const location = useLocation<any>();
  const [item, setItem] = useState<Product>(location?.state?.item);
  console.log(location?.state?.item);

  return (
    <div className="grid grid-cols-2 gap-12 mx-20 my-12">
      <div>
        <div className="flex flex-row justify-start items-center relative">
          <p className="product__detail-percent-btn ml-5">{item?.sale_price}</p>
          <p className="product__detail-percent-btn ml-28">Free shipping</p>
        </div>
        <img src={item?.images?.[0]?.src} alt={item?.name} className="rounded-3xl size__img" />
      </div>
      <div>
        <h2>{item?.name}</h2>
        <div className="flex flex-row justify-start items-center my-8">
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <StarHalf fontSize={'small'} style={{ color: '#FDBC15' }} />
          <p style={{ color: '#A9A9A9' }}>(1 customer review)</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 justify-start items-start mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text__p text__color-gray">SKU:</p>
              <p className="text__p text__color-gray">Category:</p>
              <p className="text__p text__color-gray">Stock:</p>
              <p className="text__p text__color-gray">Farm</p>
            </div>
            <div>
              <p className="text__p ">{item?.sku}</p>
              <p className="text__p "> </p>
              <p className="text__p ">{item?.stock_quantity}</p>
              <p className="text__p "> </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text__p text__color-gray">Freshness:</p>
              <p className="text__p text__color-gray">Buy by:</p>
              <p className="text__p text__color-gray">Delivery:</p>
              <p className="text__p text__color-gray">Delivery area</p>
            </div>
            <div>
              <p className="text__p "> </p>
              <p className="text__p "> </p>
              <p className="text__p ">{item?.shipping_class}</p>
              <p className="text__p "> </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text__p mb-8">{item?.price}</p>
            <p className="text__p mb-8">{item?.sale_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
