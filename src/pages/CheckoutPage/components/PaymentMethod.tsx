import React from 'react';
import { icons } from '@public/icon';
import { Checkbox } from '@material-ui/core';
import CONFIG from '@constants/config';
import { useFormik } from 'formik';
import { Check, RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons';

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h3>Billing method</h3>
        <p className="text__color-gray mb-6">Please enter your payment method</p>
        <div className="grid grid-cols-3 items-center w-full bg-gray-200 rounded-xl px-3 mb-6">
          <div onChange={formik.handleChange} className="flex flex-row gap-2 items-center text__p">
            <Checkbox
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
              name="shipping_fee"
              value="FedEx"
            />
            <p>FexEx</p>
          </div>
          <span className="flex flex-row gap-2 items-center text__p w-max">
            <p className="text__color-green text-btn">+{CONFIG.product.shipping_fee.fed} USD</p>
            Additional price
          </span>
          <img src={icons.fedex} alt={'FexEx'} className="w-16 ml-auto" />
        </div>
        <div className="grid grid-cols-3 items-center w-full bg-gray-200 rounded-xl px-3 mb-6">
          <div onChange={formik.handleChange} className="flex flex-row gap-2 items-center text__p">
            <Checkbox
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
              name="shipping_fee"
              value="DHL"
            />
            <p>DHL</p>
          </div>
          <span className="flex flex-row gap-2 items-center text__p w-max">
            <p className="text__color-green text-btn">+{CONFIG.product.shipping_fee.dhl} USD</p>
            Additional price
          </span>
          <img src={icons.dhl} alt={'DHL'} className="w-20 ml-auto" />
        </div>
      </div>
      <div>
        <h3>Payment method</h3>
        <p className="text__color-gray mb-6">Please enter your payment method</p>
        <div className="flex flex-row justify-between items-center w-full bg-gray-200 rounded-xl px-3 mb-6">
          <div onChange={formik.handleChange} className="flex flex-row gap-2 items-center text__p">
            <Checkbox
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
              name="payment"
              value="PayPal"
            />
            <p>PayPal</p>
          </div>
          <img src={icons.paypal} alt={'PayPal'} className="w-20" />
        </div>
        <div
          onChange={formik.handleChange}
          className="flex flex-row gap-2 items-center text__p bg-gray-200 rounded-xl px-3 mb-6"
        >
          <Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<RadioButtonChecked />} name="payment" value="Cash" />
          <p>Cash</p>
        </div>
      </div>
      <button type={'submit'} className="text__p button_styled mt-6 w-2/5">
        <Check fontSize={'medium'} style={{ color: 'var(--orange)' }} />
        Select method
      </button>
    </form>
  );
};
