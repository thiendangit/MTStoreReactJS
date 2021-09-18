import React, { memo } from 'react';
import './Category.css';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/pagination/pagination.scss';
import '../../../node_modules/swiper/modules/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ButtonBase } from '@material-ui/core';
import { categoryCard } from '../Data_Info/DataInfo';
import { ChevronRight } from '@material-ui/icons';
import { images } from '@public/image';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CategoryComponent: React.FC = () => {
  return (
    <div className="category">
      <h3 className="heading3">Category menu</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper category__card"
      >
        {categoryCard.map((item, index) => (
          <SwiperSlide
            key={index}
            className="category__card-item"
            style={{ backgroundImage: `url(${images.bgItem})` }}
          >
            <h6 className="heading6">{item.sub}</h6>
            <h2 className="heading2">{item.title}</h2>
            <ButtonBase className="category__card-btn">
              <p className="text-btn">{item.textBtn}</p>
              <ChevronRight fontSize={'medium'} className="chevron-icon" />
            </ButtonBase>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const Category = memo(CategoryComponent);
