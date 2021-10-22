import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router';
import { AddOutlined, BurstMode, FavoriteBorder, Star, StarHalf } from '@material-ui/icons';
import { Product } from 'WooCommerce';
import { Box, ButtonBase, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { TitleComponent } from '@components';
import { ProductHorizontalItems } from '../ProductList/ProductHorizontalItems/ProductHorizontalItems';
import { fetchProductById, fetchProducts } from '@logic';
import CryptoJS from 'crypto-js';
import { images } from '@public/image';

export interface LocationParams<T> {
  pathname: string;
  state: T;
  search: string;
  hash: string;
  key: string;
}

interface RouterProps {
  item: Product;
}

export const ProductDetail = () => {
  const location = useLocation() as LocationParams<RouterProps>;
  const [item, setItem] = useState<Product>(location?.state?.item);
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([]);
  const [value, setValue] = React.useState('1');
  const [loading, setLoading] = React.useState<boolean>(false);

  async function getRelatedProducts() {
    const reqRelated = fetchProducts({ include: JSON.stringify(item.related_ids.slice(0, 5)) });
    const [resRelated] = await Promise.all([reqRelated]);
    if (resRelated.data) setRelatedProducts(resRelated.data);
    setLoading(false);
  }

  /**
   * get product detail
   */
  useEffect(() => {
    const id_secret = location.search?.split('?sp_atk=')?.[1];
    // console.log({ id_secret });
    // console.log(process.env.CRYPTO_PRODUCT_ID_KEY);
    if (id_secret) {
      const bytes = CryptoJS.AES.decrypt(id_secret, process.env.CRYPTO_PRODUCT_ID_KEY);
      const id = bytes.toString(CryptoJS.enc.Utf8);
      // console.log('decode', id);
      (async function getProduct() {
        const response = await fetchProductById(Number(id));
        if (response && response?.data) {
          // console.log(response.data);
          setItem(response?.data);
        }
      })();
    }
  }, [location.search]);

  /**
   * get related products
   */
  useEffect(() => {
    if (item && item.related_ids.length > 0 && relatedProducts.length === 0) {
      setLoading(true);
      getRelatedProducts();
      console.log(item);
    }
  }, [item]);

  const handleChange = (event: React.ChangeEvent<{ checked: boolean }>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col mx-20 my-16">
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div>
          <div className="flex flex-row justify-start items-center relative">
            <p className="product__detail-percent-btn ml-5">{item?.sale_price}</p>
            <p className="product__detail-percent-btn ml-28">Free shipping</p>
          </div>
          <img
            src={item?.images?.[0]?.src ? item?.images?.[0]?.src : `url(${images.noImg})`}
            alt={item?.name}
            className="rounded-3xl size__img"
          />
          {item?.attributes?.map((val) => (
            <div
              key={val?.name === 'color' ? val?.name : null}
              className={
                val?.name === 'color'
                  ? 'absolute z-10 -mt-80 px-4 py-2.5 flex flex-col justify-between outline-none h-60 border-none'
                  : 'hidden'
              }
            >
              {val?.options.map((i) => (
                <button key={i} className="rounded-3xl bg-red-600 h-8 w-8" />
              ))}
            </div>
          ))}

          <div className="mt-8">
            {item?.attributes?.map((val) => (
              <select
                key={val?.name === 'size' ? val?.name : null}
                name={val?.name}
                className={val?.name === 'size' ? 'select-styled px-4 py-2.5 mr-8 rounded-3xl' : 'hidden'}
              >
                {val?.options.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
        <div>
          <h2>{item?.name}</h2>
          <div className="flex flex-row justify-start items-center my-8">
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <Star fontSize={'small'} style={{ color: '#FDBC15' }} />
            <StarHalf fontSize={'small'} style={{ color: '#FDBC15' }} />
            <p className="underline text__color-gray ml-2.5">(1 customer review)</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
          <table className="grid lg:grid-cols-2 grid-cols-1 gap-8 table-auto justify-start items-start mb-8">
            <tbody className="table-auto gap-4 items-baseline w-max mr-auto">
              <tr>
                <td className="text__p text__color-gray p-2.5">SKU:</td>
                <td className="text__p p-2.5">{item.sku ? item?.sku : '___'}</td>
              </tr>
              <tr>
                <td className="text__p text__color-gray p-2.5">Category:</td>
                {item?.categories?.map((val) => {
                  return (
                    <td className="text__p p-2.5 " key={val?.id}>
                      {val?.name ? val?.name.toString() : '___'}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="text__p text__color-gray p-2.5">Stock:</td>
                <td className="text__p p-2.5 ">{item?.in_stock ? item?.in_stock : '___'}</td>
              </tr>
            </tbody>
            <tbody className="table-auto gap-4 items-baseline w-max">
              <tr>
                <td className="text__p p-2.5 text__color-gray">Buy by:</td>
                <td>Name customer</td>
              </tr>
              <tr>
                <td className="text__p p-2.5 text__color-gray">Delivery:</td>
                <td className="text__p p-2.5 ">{item?.shipping_class ? item?.shipping_class : '___'}</td>
              </tr>
              <tr>
                <td className="text__p p-2.5 text__color-gray">Delivery area:</td>
                <td className="text__p p-2.5 ">Ho Chi Minh City</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row flex-wrap gap-8 justify-between items-center text__color-gray rounded-3xl mb-8 ">
            <div>
              <p className="text__price-product">{item?.regular_price ? item?.regular_price : item?.price}</p>
              <p className="text__price-sale line-through">
                {item?.sale_price !== item?.regular_price ? item?.sale_price : ''}
              </p>
            </div>
            <div className="flex flex-row md:flex-nowrap flex-wrap gap-3 justify-start items-stretch">
              <div className="select__input-styled w-3/4 md:w-max">
                <input type="text" className="input-styled" placeholder="1" />
                <span className="line__box" />
                <select name="Pcs" className="select-styled">
                  <option value="Pcs">Pcs</option>
                  <option value="Kgs">Kgs</option>
                  <option value="Box">Box</option>
                  <option value="Pack">Pack</option>
                </select>
              </div>
              <ButtonBase className="add__product-btn md:ml-8 ml-0 w-3/4 md:w-max">
                <AddOutlined fontSize={'large'} style={{ color: 'var(--white)', fontWeight: 'bolder' }} />
                <p className="text__add-btn">Add to cart</p>
              </ButtonBase>
            </div>
          </div>
          <div className="flex flex-row gap-12 justify-between flex-wrap items-center mb-8">
            <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
              <FavoriteBorder fontSize={'medium'} style={{ color: 'var(--orange)' }} />
              Add to my wish list
            </span>
            <span className="text-btn flex flex-row justify-start items-center gap-2.5 w-max">
              <BurstMode fontSize={'medium'} style={{ color: 'var(--orange)' }} />
              Compare
            </span>
          </div>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} variant="scrollable" scrollButtons={'auto'}>
                <Tab label="Description" value="1" className="tab__btn" />
                <Tab label="Reviews" value="2" className="tab__btn" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
            </TabPanel>
            <TabPanel value="2">
              <p className="text__p mb-8">{item?.status}</p>
            </TabPanel>
          </TabContext>
        </div>
      </div>
      <div>
        <TitleComponent title={'Related products'} textBtn={'More products'} path={'related'} />
        <ProductHorizontalItems loading={loading} data={relatedProducts} numItem={7} />
      </div>
    </div>
  );
};
