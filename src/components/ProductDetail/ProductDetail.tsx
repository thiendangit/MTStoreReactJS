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
    const reqRelated = fetchProducts({ include: JSON.stringify(item.related_ids.slice(0, 3)) });
    const [resRelated] = await Promise.all([reqRelated]);
    if (resRelated.data) setRelatedProducts(resRelated.data);
    setLoading(false);
  }

  /**
   * get product detail
   */
  useEffect(() => {
    const id_secret = location.search?.split('?sp_atk=')?.[1];
    console.log({ id_secret });
    console.log(process.env.CRYPTO_PRODUCT_ID_KEY);
    if (id_secret) {
      const bytes = CryptoJS.AES.decrypt(id_secret, process.env.CRYPTO_PRODUCT_ID_KEY);
      const id = bytes.toString(CryptoJS.enc.Utf8);
      console.log('decode', id);
      (async function getProduct() {
        const response = await fetchProductById(Number(id));
        if (response && response?.data) {
          console.log(response.data);
          setItem(response?.data);
        }
      })();
      // fetch product by id;
      // fetch product relate
      // setItem
    }
  }, [location.search]);

  /**
   * get related products
   */
  useEffect(() => {
    if (item && item.related_ids.length > 0 && relatedProducts.length === 0) {
      setLoading(true);
      getRelatedProducts();
      console.log('Related');
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
          <img src={item?.images?.[0]?.src} alt={item?.name} className="rounded-3xl size__img" />
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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 justify-start items-start mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text__p text__color-gray">SKU:</p>
                <p className="text__p text__color-gray">Category:</p>
                <p className="text__p text__color-gray">Stock:</p>
                <p className="text__p text__color-gray">Farm</p>
              </div>
              <div>
                <p className="text__p ">{item?.sku}</p>
                <p className="text__p "> </p>
                <p className="text__p ">{item?.stock_quantity}</p>
                <p className="text__p "> </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text__p text__color-gray">Freshness:</p>
                <p className="text__p text__color-gray">Buy by:</p>
                <p className="text__p text__color-gray">Delivery:</p>
                <p className="text__p text__color-gray">Delivery area</p>
              </div>
              <div>
                <p className="text__p "> </p>
                <p className="text__p "> </p>
                <p className="text__p ">{item?.shipping_class}</p>
                <p className="text__p "> </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-between items-center text__color-gray rounded-3xl mb-8 ">
            <div>
              <p className="text__price-product">{item?.price}</p>
              <p className="text__price-sale line-through">{item?.sale_price ? item?.sale_price : ''}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 justify-start items-stretch">
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
              <ButtonBase className="add__product-btn ml-8 w-3/4 md:w-max">
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
              <p className="text__p mb-8">{item?.rating_count}</p>
            </TabPanel>
          </TabContext>
        </div>
      </div>
      <div>
        <TitleComponent title={'Related products'} textBtn={'More products'} path={'related'} />
        <ProductHorizontalItems loading={loading} data={relatedProducts} numItem={{ numItem: 7 }} />
      </div>
    </div>
  );
};
