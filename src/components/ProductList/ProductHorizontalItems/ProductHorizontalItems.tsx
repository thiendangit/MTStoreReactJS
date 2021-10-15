import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import '../../../../node_modules/swiper/modules/scrollbar/scrollbar.scss';
import { Product } from 'WooCommerce';
import { SkeletonComponent } from '../../SkelatonComponent/SkeletonComponent';

const CryptoJS = require('crypto-js');

SwiperCore.use([Scrollbar]);

const defaultItems = {
  numItem: 7,
};

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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {data
          ?.map((item) => {
            const onPressItem = () => gotoProductDetail(item);
            // console.log(item);
            return (
              <SwiperSlide key={item?.id}>
                <button onClick={onPressItem}>
                  {/*<Link to={`/product/${item.id}/${item.slug}`}>*/}
                  <p className="product__list-item-sale">{item?.sale_price}</p>
                  <img src={item?.images?.[0]?.src} alt="Product in store" />
                  <h4 className="product__list-item-title">{item?.name}</h4>
                  <div dangerouslySetInnerHTML={{ __html: item?.description }} className="product__list-item-desc" />
                  <div className="product__list-item-price">
                    <span className="price__regular">
                      {item?.regular_price}
                      <br />
                      <span className="price">{item?.price}</span>
                    </span>
                    <ButtonBase className="product__item-btn">
                      <p className="product__item-text-btn">Buy now</p>
                    </ButtonBase>
                  </div>
                  {/*</Link>*/}
                </button>
              </SwiperSlide>
            );
          })
          .slice(0, numItem.numItem)}
      </Swiper>
    </div>
  );
};

ProductHorizontalItemsComponent.defaudeltProps = defaultItems;

export const ProductHorizontalItems = ProductHorizontalItemsComponent;
