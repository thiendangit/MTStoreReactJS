import React from 'react';
import { icons } from '@public/icon';
import { Radio } from '@material-ui/core';

export const PaymentMethod = () => {
  return (
    <div>
      <div>
        <h3>Billing method</h3>
        <p className="text__color-gray">Please enter your payment method</p>
        <div className="div-flex-styled">
          <div className="flex flex-row gap-2 items-center text__p">
            <Radio />
            <p>FedEx</p>
          </div>
          <span className="flex flex-row gap-2 items-center text__p">
            <p className="text__color-green text-btn">+32 USD</p>
            Additional price
          </span>
          <img src={icons.fexex} alt={'FexEx'} className="w-16" />
        </div>
        <div className="div-flex-styled">
          <div className="flex flex-row gap-2 items-center text__p">
            <Radio />
            <p>DHL</p>
          </div>
          <span className="flex flex-row gap-2 items-center text__p text-right">
            <p className="text__color-green text-btn">+15 USD</p>
            Additional price
          </span>
          <img src={icons.dhl} alt={'DHL'} className="w-20" />
        </div>
      </div>
      <div>
        <h3>Payment method</h3>
        <p className="text__color-gray">Please enter your payment method</p>
        <div className="div-flex-styled">
          <div className="flex flex-row gap-2 items-center text__p">
            <Radio />
            <p>PayPal</p>
          </div>
          <img src={icons.paypal} alt={'PayPal'} className="w-20" />
        </div>
        <div className="flex flex-row gap-2 items-center text__p">
          <Radio />
          <p>Cash</p>
        </div>
      </div>
    </div>
  );
};
