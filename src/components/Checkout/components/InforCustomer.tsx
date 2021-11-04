import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
});
export const InforCustomer = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="infor_customer">
      <h3>Billing infor</h3>
      <p className="text__color-gray mb-6">Please enter your billing info</p>
      <form onSubmit={formik.handleSubmit} className="form_content grid grid-cols-2 gap-8">
        <TextField
          name="first_name"
          label="First name:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          name="last_name"
          label="Last name:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          id="email"
          name="email"
          label="Email address:"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          name="phone_number"
          label="Phone number:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          name="address"
          label="Address:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          name="city"
          label="Town / City:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          name="country"
          label="State / Country:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
        <TextField
          name="code"
          label="ZIP/Postal code:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
        />
      </form>
    </div>
  );
};
