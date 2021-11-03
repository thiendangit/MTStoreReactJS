const ICON_URL = process.env.PUBLIC_URL;
export const icons = {
  cart: `${ICON_URL}/icon/cart/bitmap.png`,
  user: `${ICON_URL}/icon/user/bitmap.png`,
  logo: `${ICON_URL}/icon/logo/bitmap.png`,
  paypal: `${ICON_URL}/icon/paypal/bitmap.png`,
  dhl: `${ICON_URL}/icon/dhl/bitmap.png`,
  fexex: `${ICON_URL}/icon/fexex/bitmap.png`,
  confirm: `${ICON_URL}/icon/confirm/bitmap.png`,
};

export type IconType = keyof typeof icons;
