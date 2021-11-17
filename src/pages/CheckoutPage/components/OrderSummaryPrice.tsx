import React from 'react';
import CONFIG from '@constants/config';

export const OrderSummaryPrice = ({ cartTotalPrice }: { cartTotalPrice: number }) => {
  const order_day = new Date();
  const shipping_day = order_day.getDate() + 6;
  const shipping_month = order_day.getMonth();
  const shipping_year = order_day.getFullYear();
  const _shipping_month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(shipping_month);

  return (
    <div>
      <div>
        <div className="text__p summary_price">
          <p>Subtotal</p>
          <p className="text__color-green text-btn">
            {cartTotalPrice} {CONFIG.product.unit.long}
          </p>
        </div>
        <div className="text__p summary_price">
          <p>Tax</p>
          <span className="flex flex-row gap-4 w-max">
            {CONFIG.product.tax}%
            <p className="text__color-green text-btn">
              {(CONFIG.product.tax * cartTotalPrice) / 100} {CONFIG.product.unit.long}
            </p>
          </span>
        </div>
        <div className="text__p summary_price">
          <p>Shipping</p>
          <p className="text__color-green text-btn">
            {CONFIG.product.shipping_fee.dhl} {CONFIG.product.unit.long}
          </p>
        </div>
      </div>
      <div className="summary_price items-start">
        <span className="text-btn flex flex-col items-start gap-2 w-max">
          Total Order
          <p className="text__p text__color-gray">
            Guaranteed delivery day: {_shipping_month} {shipping_day}, {shipping_year}.
          </p>
        </span>
        <p className="flex flex-row gap-4 w-max text__color-green text-btn">
          {cartTotalPrice + CONFIG.product.shipping_fee.dhl + (CONFIG.product.tax * cartTotalPrice) / 100}{' '}
          {CONFIG.product.unit.long}
        </p>
      </div>
    </div>
  );
};
