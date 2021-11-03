import React from 'react';
import { icons } from '@public/icon';
import { CheckBoxRounded } from '@material-ui/icons';

export const PaymentMethod = () => {
  return (
    <div>
      <div>
        <h3>Billing method</h3>
        <p>Please enter your payment method</p>
        <div>
          <CheckBoxRounded />
          <p>FedEx</p>
          <span>
            <p>+32 USD</p>
            Additional price
          </span>
          <img src={icons.fexex} alt={'FexEx'} />
        </div>
        <div>
          <CheckBoxRounded />
          <p>DHL</p>
          <span>
            <p>+15 USD</p>
            Additional price
          </span>
          <img src={icons.dhl} alt={'DHL'} />
        </div>
      </div>
      <div>
        <h3>Payment method</h3>
        <p>Please enter your payment method</p>
        <div>
          <div>
            <CheckBoxRounded />
            <p>PayPal</p>
          </div>
          <img src={icons.paypal} alt={'PayPal'} />
        </div>
        <div>
          <CheckBoxRounded />
          <p>Cash</p>
        </div>
      </div>
    </div>
  );
};
