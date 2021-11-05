import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useLocation } from 'react-router';
import { Product } from 'WooCommerce';
import { TitleComponent } from '@components';
import { ProductHorizontalItems } from '../ProductList/components/ProductHorizontalItems/ProductHorizontalItems';
import { fetchProductById, fetchProducts } from '@logic';
import CryptoJS from 'crypto-js';
import { images } from '@public/image';
import { ColorProportion } from './components/ColorProportion';
import { StarRatingComponent } from './components/StarRating';
import { PercentComponent } from './components/PercentComponent';
import { InfoDetail } from './components/InfoDetail';
import { ProportionComponent } from './components/ProportionComponent';
import { UnitSelect } from './components/UnitSelect';
import { FavoriteComponent } from './components/FavoriteComponent';
import { TabDetailContent } from './components/TabDetailContent';
import { ProductItemPrice } from './components/ProductItemPrice';

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
      // console.log(item);
    }
  }, [item]);

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
          <InfoDetail {...{ item }} />
          <ProportionComponent {...{ item }} />
          <div className="div-flex-styled text__color-gray rounded-3xl">
            <ProductItemPrice {...{ item }} />
            <UnitSelect {...{ item }} />
          </div>
          <FavoriteComponent />
          <TabDetailContent {...{ item }} />
        </div>
      </div>
      <div>
        <TitleComponent title={'Related products'} textBtn={'More products'} path={'related'} />
        <ProductHorizontalItems loading={loading} data={relatedProducts} numItem={7} />
      </div>
    </div>
  );
};
