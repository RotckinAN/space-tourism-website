import React from 'react';
import Tech from '../Tech/Tech';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import useCurrentWidth from '../../hooks/useCurrentWidth';

const Technology = ({ technology }) => {
   const actualWindowWidth = useCurrentWidth();
   const direction = `${actualWindowWidth < 1070 ? 'horizontal' : 'vertical'}`;

   const pagination = {
      clickable: true,
      bulletClass: 'sliderTechno-bullet',
      bulletActiveClass: 'sliderTechno-bullet-active',
      verticalClass: 'sliderTechno-bullet-vertical',
      horizontalClass: 'sliderTechno-bullet-horizontal',
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   };

   return (
      <main className="technology">
         <h1 className="technology__title">
            <span>03</span> SPACE LAUNCH 101
         </h1>
         <CustomSwiper
            elements={technology}
            pagination={pagination}
            ComponentToSlide={Tech}
            direction={direction}
         />
      </main>
   );
};

export default Technology;
