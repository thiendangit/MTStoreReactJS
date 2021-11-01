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
      email: 'foobar@example.com',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="infor_customer">
      <h3>Billing infor</h3>
      <p>Please enter your billing info</p>
      <form onSubmit={formik.handleSubmit} className="form_content">
        <TextField name="first_name" label="First name:" className="form_item" />
        <TextField name="last_name" label="Last name:" className="form_item" />
        <TextField
          id="email"
          name="email"
          label="Email address:"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="form_item"
        />
        <TextField name="phone_number" label="Phone number:" className="form_item" />
        <TextField name="address" label="Address:" className="form_item" />
        <TextField name="city" label="Town / City:" className="form_item" />
        <TextField name="country" label="State / Country:" className="form_item" />
        <TextField name="code" label="ZIP/Postal code:" className="form_item" />
      </form>
    </div>
  );
};
