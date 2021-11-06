import React, { useEffect, useState } from 'react';
import './ProductDetailPage.css';
import { useLocation } from 'react-router';
import { Product } from 'WooCommerce';
import { MenuBar, ProductHorizontalItems, TitleComponent } from '@components';
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
import { AddOutlined } from '@material-ui/icons';
import { ButtonBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actionsCart } from '@store/reducers/cartSlice';

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

export const ProductDetailPage = () => {
  const location = useLocation() as LocationParams<RouterProps>;
  const [item, setItem] = useState<Product>(location?.state?.item);
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAddOneToCart = () => {
    dispatch(actionsCart.addOneToCart(item));
  };

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
    <>
      <MenuBar />
      <div className="flex flex-col mx-20 my-16">
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="relative">
            <img
              src={item?.images?.[0]?.src ? item?.images?.[0]?.src : `${images.noImg}`}
              alt={item?.name}
              className="rounded-3xl size__img"
            />
            <PercentComponent {...{ item }} />
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
              <div className="flex flex-row md:flex-nowrap flex-wrap gap-3 justify-start items-stretch">
                <UnitSelect {...{ item }} />
                <ButtonBase className="add__product-btn md:ml-8 ml-0 w-3/4 md:w-max" onClick={handleAddOneToCart}>
                  <AddOutlined fontSize={'large'} style={{ color: 'var(--white)', fontWeight: 'bolder' }} />
                  <p className="text__add-btn">Add to cart</p>
                </ButtonBase>
              </div>
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
    </>
  );
};
