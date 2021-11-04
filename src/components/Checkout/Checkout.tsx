import React from 'react';
import './Checkout.css';
import { InforCustomer } from './components/InforCustomer';
import { PaymentMethod } from './components/PaymentMethod';
import { Confirm } from './components/Confirm';
import { OrderSummary } from './components/OrderSummary';

export const Checkout = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <InforCustomer />
        <PaymentMethod />
        <Confirm />
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
};
