import React from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router';
import { Star, StarHalf } from '@material-ui/icons';

export const ProductDetail = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="grid grid-cols-2 gap-12 mx-20 my-12">
      <div>
        <div className="flex flex-row justify-start items-center relative">
          <p className="product__detail-percent-btn ml-5">percent</p>
          <p className="product__detail-percent-btn ml-28">Free shipping</p>
        </div>
        <img
          src="https://dbk.vn/uploads/ckfinder/images/tranh-anh/Anh-thien-nhien-1.jpg"
          alt="Anh-thien-nhien"
          className="w-full rounded-3xl"
        />
      </div>
      <div>
        <h2>Product</h2>
        <div className="flex flex-row justify-start items-center my-8">
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
          <StarHalf fontSize={'small'} style={{ color: '#A9A9A9' }} />
          <p style={{ color: '#A9A9A9' }}>(1 customer review)</p>
        </div>
        <p className="text__p mb-8">description</p>
        <div className="grid grid-cols-2 gap-6 justify-start items-center mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text__p text__color-gray">SKU:</p>
              <p className="text__p text__color-gray">Category:</p>
              <p className="text__p text__color-gray">Stock:</p>
              <p className="text__p text__color-gray">Farm</p>
            </div>
            <div>
              <p className="text__p ">SKU:</p>
              <p className="text__p ">Category:</p>
              <p className="text__p ">Vegetables</p>
              <p className="text__p ">Vegetables</p>
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
              <p className="text__p ">SKU:</p>
              <p className="text__p ">Vegetables</p>
              <p className="text__p ">Vegetables</p>
              <p className="text__p ">Vegetables</p>
            </div>
          </div>
        </div>
        <p className="text__p mb-8">price</p>
      </div>
    </div>
  );
};
