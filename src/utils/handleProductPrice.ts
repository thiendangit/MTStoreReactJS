import { Product } from 'WooCommerce';

export const handleProductPrice = (
  product: Product,
): {
  sale_price: number;
  regular_price: number;
  percent: number;
} => {
  const sale_price = product.sale_price !== '' ? parseInt(product.sale_price) : 0;
  const price = product.price !== '' ? parseInt(product.price) : 0;
  const regular_price = product.regular_price !== '' ? parseInt(product.regular_price) : 0;
  let price_result = regular_price ? regular_price : price;
  const sale_price_result = sale_price ? (sale_price < price_result ? sale_price : price_result) : price_result;
  let percent = price_result !== 0 ? ((price_result - sale_price_result) / price_result) * 100 : 0;
  if (sale_price_result >= price_result) {
    price_result = 0;
    percent = 0;
  }

  return {
    sale_price: sale_price_result,
    regular_price: price_result,
    percent,
  };
};
