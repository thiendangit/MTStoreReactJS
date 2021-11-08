import React from 'react';
import { icons } from '@public/icon';
import { Radio } from '@material-ui/core';
import CONFIG from '@constants/config';
import { useFormik } from 'formik';

export const PaymentMethod: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      shipping_fee: '',
      payment: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h3>Billing method</h3>
        <p className="text__color-gray mb-6">Please enter your payment method</p>
        <div className="grid grid-cols-3 items-center w-full bg-gray-200 rounded-xl px-3 mb-6">
          <div className="flex flex-row gap-2 items-center text__p">
            <button type={'submit'} onChange={formik.handleChange} name="shipping_fee" value="FedEx">
              <p>FedEx</p>
            </button>
          </div>
          <span className="flex flex-row gap-2 items-center text__p w-max">
            <p className="text__color-green text-btn">+{CONFIG.product.shipping_fee.fed} USD</p>
            Additional price
          </span>
          <img src={icons.fexex} alt={'FexEx'} className="w-16 ml-auto" />
        </div>
        <div className="grid grid-cols-3 items-center w-full bg-gray-200 rounded-xl px-3 mb-6">
          <div onChange={formik.handleChange} className="flex flex-row gap-2 items-center text__p">
            <Radio name="shipping_fee" value="DHL" />
            <p>DHL</p>
          </div>
          <span className="flex flex-row gap-2 items-center text__p w-max">
            <p className="text__color-green text-btn">+{CONFIG.product.shipping_fee.dhl} USD</p>
            Additional price
          </span>
          <img src={icons.dhl} alt={'DHL'} className="w-20 ml-auto" />
        </div>
      </form>
      <form onSubmit={formik.handleSubmit}>
        <h3>Payment method</h3>
        <p className="text__color-gray mb-6">Please enter your payment method</p>
        <div className="flex flex-row justify-between items-center w-full bg-gray-200 rounded-xl px-3 mb-6">
          <div onChange={formik.handleChange} className="flex flex-row gap-2 items-center text__p">
            <Radio name="payment" value="PayPal" />
            <p>PayPal</p>
          </div>
          <img src={icons.paypal} alt={'PayPal'} className="w-20" />
        </div>
        <div
          onChange={formik.handleChange}
          className="flex flex-row gap-2 items-center text__p bg-gray-200 rounded-xl px-3 mb-6"
        >
          <Radio name="payment" value="Cash" />
          <p>Cash</p>
        </div>
      </form>
    </div>
  );
};
