import * as yup from 'yup';
import { checkoutFormModel } from './checkoutFormModel';
const {
  formField: { firstName, lastName, address1, city, zipcode, country },
} = checkoutFormModel;

export const validationSchema = [
  yup.object().shape({
    [firstName.name]: yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [zipcode.name]: yup.string().required(`${zipcode.requiredErrorMsg}`),
    [country.name]: yup.string().nullable().required(`${country.requiredErrorMsg}`),
  }),
];
