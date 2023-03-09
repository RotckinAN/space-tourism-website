import React from 'react';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import CrewMember from '../CrewMember/CrewMember';

const Crew = ({ crew }) => {
   const pagination = {
      clickable: true,
      bulletClass: 'sliderCrew-bullet',
      bulletActiveClass: 'sliderCrew-bullet-active',
      horizontalClass: 'sliderCrew-bullet-horizontal',
   };

   return (
      <main className="crew">
         <h1 className="crew__title">
            <span>02</span> Meet your crew
         </h1>
         <CustomSwiper
            elements={crew}
            pagination={pagination}
            ComponentToSlide={CrewMember}
         />
      </main>
   );
};

export default Crew;
