import { checkoutFormModel } from './checkoutFormModel';

const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    useMethodForPayment,
    useCashForPayment,
    useCardForPayment,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = checkoutFormModel;

export const initialValues = {
  [firstName.name]: '',
  [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [useMethodForPayment.name]: false,
  [useCashForPayment.name]: false,
  [useCardForPayment.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: '',
};
