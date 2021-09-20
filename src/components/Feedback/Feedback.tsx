import React, { memo } from 'react';
import './Feedback.css';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/navigation/navigation.scss';
import { ButtonBase } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { feedbackCustomers } from '../Data_Info/DataInfo';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const FeedBackComponent: React.FC = () => {
  return (
    <div className="feedback">
      <div className="feedback__item1">
        <h2>Our customers says</h2>
        <ButtonBase className="feedback__item1-btn">
          Button
          <ChevronRight fontSize={'medium'} />
        </ButtonBase>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        className="feedback__item2"
      >
        {feedbackCustomers.map((item) => (
          <SwiperSlide key={item.id} className="feedback__item2-content">
            <p className="feedback__item2-review">{item.review}</p>
            <p className="feedback__item2-reviewer">{item.reviewer}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export const FeedBack = memo(FeedBackComponent);
