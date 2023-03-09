import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './VerticalSwiper.css';

const VerticalSwiper = ({ elements, ComponentToSlide }) => {
   const pagination = {
      clickable: true,
      bulletClass: 'sliderTechno-bullet',
      bulletActiveClass: 'sliderTechno-bullet-active',
      verticalClass: 'sliderTechno-bullet-vertical',
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   };

   return (
      <>
         <Swiper
            // containerModifierClass="swiper-sliderTechnology-"
            pagination={pagination}
            direction={'vertical'}
            modules={[Autoplay, Pagination]}
            simulateTouch={true}
            // autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper"
         >
            {elements.map((element) => {
               return (
                  <SwiperSlide key={element._id}>
                     <ComponentToSlide technology={element} />;
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default VerticalSwiper;
