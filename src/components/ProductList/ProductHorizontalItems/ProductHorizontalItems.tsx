import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import '../../../../node_modules/swiper/modules/scrollbar/scrollbar.scss';
import { Product } from 'WooCommerce';
import { SkeletonComponent } from '../../SkelatonComponent/SkeletonComponent';
import { images } from '@public/image';
import { handleProductPrice } from '@utils/handleProductPrice';
import CONFIG from '@constants/config';

const CryptoJS = require('crypto-js');

SwiperCore.use([Scrollbar]);

const defaultItems = 7;

interface ProductHorizontalItemsProps {
  data: Product[];
  loading: boolean;
  numItem: typeof defaultItems;
}

const ProductHorizontalItemsComponent = ({ data, numItem, loading }: ProductHorizontalItemsProps) => {
  const history = useHistory();

  const gotoProductDetail = (item: Product) => {
    const id_secret = CryptoJS.AES.encrypt(item?.id?.toString(), process.env.CRYPTO_PRODUCT_ID_KEY).toString();
    history.push(`/product?sp_atk=${id_secret}`, {
      item,
    });
  };

  if (loading) {
    return <SkeletonComponent />;
  }

  return (
    <div className="product__list">
      <Swiper
        slidesPerView={1}
        scrollbar={false}
        spaceBetween={20}
        breakpoints={{
          '640': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          '1280': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {data
          ?.map((item) => {
            const { regular_price, sale_price, percent } = handleProductPrice(item);
            const onPressItem = () => gotoProductDetail(item);
            // console.log(item);
            return (
              <SwiperSlide key={item?.id} onClick={onPressItem}>
                {percent != 0 && <span className="product__list-item-sale">{percent?.toString()}%</span>}
                <img src={item?.images?.[0]?.src ? item?.images?.[0]?.src : `${images.noImg}`} alt="Product in store" />
                <div className="flex flex-col flex-1 w-full">
                  <div className="flex flex-col flex-1 w-full mb-6">
                    <h4 className="product__list-item-title w-full truncate break-all">{item?.name}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                      className="product__list-item-desc mt-auto w-full truncate break-all"
                    />
                  </div>
                  <div className="product__list-item-price">
                    <span className="sale_price">
                      {sale_price?.toString()} {CONFIG.product.unit.long}
                      <br />
                      {regular_price != 0 && (
                        <span className="regular_price">
                          {regular_price?.toString()} {CONFIG.product.unit.long}
                        </span>
                      )}
                    </span>
                    <ButtonBase className="product__item-btn">
                      <p className="product__item-text-btn">Buy now</p>
                    </ButtonBase>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
          .slice(0, numItem)}
      </Swiper>
    </div>
  );
};

ProductHorizontalItemsComponent.defaudeltProps = defaultItems;

export const ProductHorizontalItems = ProductHorizontalItemsComponent;
