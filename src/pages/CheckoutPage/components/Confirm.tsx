import React from 'react';
import { Button, Checkbox, Input } from '@material-ui/core';
import { icons } from '@public/icon';
import { useFormik } from 'formik';

export const Confirm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      sending: '',
      term: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div>
      <div className="my-12">
        <h3>Additional information</h3>
        <p className="text__color-gray mb-6">Need something else? We will make it for you!</p>
        <p className="text__p font-bold">Order notes</p>
        <Input
          placeholder={'Need a specific delivery day? Sending a gift? Let’s say ...'}
          className="w-full border-gray-300 rounded-3xl"
        />
      </div>
      <form onSubmit={formik.handleSubmit} className="my-12">
        <h3>Confirmation</h3>
        <p className="text__color-gray mb-4">We are getting to the end. Just few clicks and your order si ready!</p>
        <div
          onChange={formik.handleChange}
          className="flex flex-row gap-2 items-center bg-gray-200 rounded-xl px-3 py-4 mb-6"
        >
          <Checkbox name="sending" value="agree" />
          <p className="text__p">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
        </div>
        <div
          onChange={formik.handleChange}
          className="flex flex-row gap-2 items-center bg-gray-200 rounded-xl px-3 py-4 mb-6"
        >
          <Checkbox required={true} name="term" value="agree" />
          <p className="text__p">
            I agree with our <span className="underline">terms and conditions</span> and{' '}
            <span className="underline">privacy policy</span>.
          </p>
        </div>
        <Button type={'submit'} value={'Complete order'} className="add__product-btn text__add-btn my-12">
          Complete order
        </Button>
        <br />
        <img src={icons.confirm} alt={''} className="w-10 mt-8 mb-3" />
        <p className="text__p font-bold">All your data are safe</p>
        <p className="text__p text__color-gray w-2/4 mt-4">
          We are using the most advanced security to provide you the best experience ever.
        </p>
      </form>
    </div>
  );
};
