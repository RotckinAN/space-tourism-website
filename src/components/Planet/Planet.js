import React from 'react';
// import './Planet.css'
const Planet = ({ data }) => {
   const { subtitle, image, paragraph, distance, time } = data;

   return (
      <section className="planet">
         <div className="planet__container">
            <img
               src={require(`../../images/destination/${image}`)}
               alt=""
               className="planet__planetImage"
            />
            <div className="planet__textContainer">
               <h2 className="planet__subTitle">{subtitle}</h2>
               <p className="planet__paragraph">{paragraph}</p>
               <div className="planet__destinationContainer">
                  <div className="planet__wrapperDestination">
                     <h3 className="planet__destinationTitle">AVG. DISTANCE</h3>
                     <p className="planet__destinationParagraph">{distance}</p>
                  </div>
                  <div className="planet__wrapperDestination">
                     <h3 className="planet__destinationTitle">
                        EST. TRAVEL TIME
                     </h3>
                     <p className="planet__destinationParagraph">{time}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Planet;
