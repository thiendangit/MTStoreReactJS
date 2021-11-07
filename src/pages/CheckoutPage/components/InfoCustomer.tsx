import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  first_name: yup.string().min(2, 'Too short!').max(50, 'Too long!').required('First name is required'),
  last_name: yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Last name is required'),
  address: yup.string().required('Address is required'),
  phone: yup.string().required('Phone number is required'),
  city: yup.string().required('Town/ City is required'),
  country: yup.string().required('Country is required'),
  code: yup.string().required('ZIP/ Postal code  is required'),
});
export const InfoCustomer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
      city: '',
      country: '',
      code: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="info_customer">
      <h3>Billing information</h3>
      <p className="text__color-gray mb-6">Please enter your billing info</p>
      <form onSubmit={formik.handleSubmit} className="form_content grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TextField
          name="first_name"
          label="First name:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
          name="last_name"
          label="Last name:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
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
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          name="address"
          label="Address:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          name="city"
          label="Town / City:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          name="country"
          label="State / Country:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
        <TextField
          name="code"
          label="ZIP/Postal code:"
          className="form_item input-styled rounded-3xl"
          variant={'outlined'}
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
        />
      </form>
    </div>
  );
};
