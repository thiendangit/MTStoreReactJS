import React from 'react';
import CONFIG from '@constants/config';

export const OrderSummaryPrice = ({ cartTotalPrice }: { cartTotalPrice: number }) => {
  const tax = 10;
  const shipping_fee = 10;
  return (
    <div>
      <div>
        <div className="text__p flex flex-row justify-between items-center gap-2 w-full">
          <p>Subtotal</p>
          <p>
            {cartTotalPrice} {CONFIG.product.unit.long}
          </p>
        </div>
        <div className="text__p flex flex-row justify-between items-center gap-2 w-full">
          <p>Tax</p>
          <span>
            {tax}%
            <p className="ml-4">
              {(tax * cartTotalPrice) / 100}
              {CONFIG.product.unit.long}
            </p>
          </span>
        </div>
        <div className="text__p flex flex-row justify-between items-center gap-2 w-full">
          <p>Shipping</p>
          <p>
            {shipping_fee} {CONFIG.product.unit.long}
          </p>
        </div>
      </div>
      <div className="text__p flex flex-row justify-between items-center gap-2 w-full">
        <span className="text-btn flex flex-col items-start gap-2 w-max">
          Total Order
          <p className="text__p text__color-gray">Guaranteed delivery day: June 12, 2020</p>
        </span>
        <p>{cartTotalPrice + shipping_fee + (tax * cartTotalPrice) / 100}</p>
      </div>
    </div>
  );
};
