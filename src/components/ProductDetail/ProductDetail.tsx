import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router';
import { Product } from 'WooCommerce';
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { TitleComponent } from '@components';
import { ProductHorizontalItems } from '../ProductList/ProductHorizontalItems/ProductHorizontalItems';
import { fetchProductById, fetchProducts } from '@logic';
import CryptoJS from 'crypto-js';
import { images } from '@public/image';
import { ColorProportion } from './components/ColorProportion';
import { StarRatingComponent } from './components/StarRating';
import { PercentComponent } from './components/PercentComponent';
import { InforDetail } from './components/InforDetail';
import { ProportionComponent } from './components/ProportionComponent';
import { UnitSelect } from './components/UnitSelect';
import { FavoriteComponent } from './components/FavoriteComponent';

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
          <PercentComponent {...{ item }} />
          <img
            src={item?.images?.[0]?.src ? item?.images?.[0]?.src : `${images.noImg}`}
            alt={item?.name}
            className="rounded-3xl size__img"
          />
          <ColorProportion {...{ item }} />
        </div>
        <div>
          <h2>{item?.name}</h2>
          <StarRatingComponent />
          <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text__p mb-8" />
          <InforDetail {...{ item }} />
          <ProportionComponent {...{ item }} />
          <div className="flex flex-row flex-wrap gap-8 justify-between items-center text__color-gray rounded-3xl mb-8 ">
            <div>
              <p className="text__price-product">{item?.regular_price ? item?.regular_price : item?.price}</p>
              <p className="text__price-sale line-through">
                {item?.sale_price !== item?.regular_price ? item?.sale_price : ''}
              </p>
            </div>
            <UnitSelect {...{ item }} />
          </div>
          <FavoriteComponent />
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
