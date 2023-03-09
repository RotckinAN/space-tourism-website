import React from 'react';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import Planet from '../Planet/Planet';

const Destination = ({ planets }) => {
   const pagination = {
      clickable: true,
      bulletClass: 'sliderPlanet-bullet',
      bulletActiveClass: 'sliderPlanet-bullet-active',
      horizontalClass: 'sliderPlanet-horizontal',
      renderBullet: function (index, className) {
         return (
            '<span class="' +
            className +
            '">' +
            planets[index].subtitle +
            '</span>'
         );
      },
   };

   return (
      <main className="destination">
         <h1 className="destination__title">
            <span>01</span>Pick your destination
         </h1>
         <CustomSwiper
            elements={planets}
            pagination={pagination}
            ComponentToSlide={Planet}
         />
      </main>
   );
};

export default Destination;
