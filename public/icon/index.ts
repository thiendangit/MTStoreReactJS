const ICON_URL = process.env.PUBLIC_URL;
export const icons = {
  cart: `${ICON_URL}/icon/cart/bitmap.png`,
  user: `${ICON_URL}/icon/user/bitmap.png`,
  logo: `${ICON_URL}/icon/logo/bitmap.png`,
};

export type IconType = keyof typeof icons;
