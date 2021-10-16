import React, { memo } from 'react';
import './Feedback.css';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { feedbackCustomers } from '../Data_Info/DataInfo';
import { TitleComponent } from '../TitleComponent/TitleComponent';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const FeedBackComponent: React.FC = () => {
  return (
    <div className="feedback">
      <TitleComponent title={'Our customers says'} textBtn={'Button'} path={'feedback'} />
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
        className="feedback__item"
      >
        {feedbackCustomers.map((item) => (
          <SwiperSlide key={item.id} className="feedback__item-content">
            <p className="feedback__item-review">{item.review}</p>
            <p className="feedback__item-reviewer">{item.reviewer}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export const FeedBack = memo(FeedBackComponent);
