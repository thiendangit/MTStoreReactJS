import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import '../../../../node_modules/swiper/modules/scrollbar/scrollbar.scss';
import { Product } from 'WooCommerce';

SwiperCore.use([Scrollbar]);

const defaultItems = {
  numItem: 7,
};

const ProductHorizontalItemsComponent = ({ data, numItem }: { data: Product[]; numItem: typeof defaultItems }) => {
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
          ?.map((item) => (
            <SwiperSlide key={item.id}>
              <p className="product__list-item-sale">{item.sale_price}</p>
              <img src={item?.images?.[0]?.src} alt="Product in store" />
              <Link to={`/${item.slug}`}>
                <h4 className="product__list-item-title">{item.name}</h4>
              </Link>
              {/*<p className="product__list-item-desc">{item.short_description}</p>*/}
              <div className="product__list-item-price">
                <span className="price__regular">
                  {item.regular_price}
                  <br />
                  <span className="price">{item.price}</span>
                </span>
                <Link to={`/${item.slug}`}>
                  <ButtonBase className="product__item-btn">
                    <p className="product__item-text-btn">Buy now</p>
                  </ButtonBase>
                </Link>
              </div>
            </SwiperSlide>
          ))
          .slice(0, numItem.numItem)}
      </Swiper>
    </div>
  );
};

ProductHorizontalItemsComponent.defaudeltProps = defaultItems;

export const ProductHorizontalItems = ProductHorizontalItemsComponent;
