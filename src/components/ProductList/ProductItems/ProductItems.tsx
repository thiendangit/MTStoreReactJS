import React from 'react';
import { productList } from '../../Data_Info/DataInfo';
import { ButtonBase } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import '../../../../node_modules/swiper/modules/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar]);

export const ProductItems: React.FC = () => {
  return (
    <div className="product__list">
      {productList.map((item) => (
        <Swiper
          key={item.id}
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
          {item.images.length === 0
            ? null
            : item.images
                .map((e) => (
                  <SwiperSlide key={e.id}>
                    <p className="product__list-item-sale">{item.sale_price}</p>
                    <img src={e.src} alt="Product in store" />
                    <h4 className="product__list-item-title">{item.name}</h4>
                    <p className="product__list-item-desc">
                      {item.short_description}
                    </p>
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
                ))
                .slice(0, 7)}
        </Swiper>
      ))}
    </div>
  );
};
