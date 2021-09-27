import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import '../../../../node_modules/swiper/modules/scrollbar/scrollbar.scss';
import { Product } from 'WooCommerce';

SwiperCore.use([Scrollbar]);

const defaultItems = {
  numItem: 7,
};

export const ProductItems: ({ data, numItem }: { data: Product[]; numItem: typeof defaultItems }) => JSX.Element = ({
  data,
}: {
  data: Product[];
  numItem: typeof defaultItems;
}) => {
  if (data.length === 0) {
    return null;
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
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <p className="product__list-item-sale">{item.sale_price}</p>
            <img src={item?.images?.[0]?.src} alt="Product in store" />
            <h4 className="product__list-item-title">{item.name}</h4>
            {/*<p className="product__list-item-desc">{item.short_description}</p>*/}
            <div className="product__list-item-price">
              <span className="price__regular">
                {item.regular_price}
                <br />
                <span className="price">{item.price}</span>
              </span>
              <ButtonBase className="product__item-btn">
                <p className="product__item-text-btn">Buy now</p>
              </ButtonBase>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
ProductItems.defaultProps = defaultItems;