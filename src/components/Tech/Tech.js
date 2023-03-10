import React from 'react';

const Tech = ({ data }) => {
   const { name, paragraph, landscapeImage, portraitImage } = data;

   return (
      <section className="tech">
         <div className="tech__container">
            <div className="tech__textContainer">
               <h2 className="tech__subtitle">THE TERMINOLOGY…</h2>
               <h3 className="tech__nameTitle">{name}</h3>
               <p className="tech__paragraph">{paragraph}</p>
            </div>
            <img
               src={require(`../../images/technology/${portraitImage}`)}
               alt={name}
               className="tech__image tech__image_type_portrait"
            />
            <img
               src={require(`../../images/technology/${landscapeImage}`)}
               alt={name}
               className="tech__image tech__image_type_landscape"
            />
         </div>
      </section>
   );
};

export default Tech;
