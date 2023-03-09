import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './CustomSwiper.css';

const CustomSwiper = ({
   elements,
   pagination,
   ComponentToSlide,
   direction,
}) => {
   return (
      <>
         <Swiper
            direction={direction}
            spaceBetween={100}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            simulateTouch={false}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper"
         >
            {elements.map((element) => {
               return (
                  <SwiperSlide key={element._id}>
                     <ComponentToSlide data={element} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default CustomSwiper;
