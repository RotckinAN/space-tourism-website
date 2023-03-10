import React from 'react';

const CrewMember = ({ data }) => {
   const { profession, name, description, image } = data;

   return (
      <section className="crewMember">
         <div className="crewMember__textContainer">
            <h2 className="crewMember__subtitle">{profession}</h2>
            <h3 className="crewMember__nameTitle">{name}</h3>
            <p className="crewMember__paragraph">{description}</p>
         </div>
         <img
            src={require(`../../images/crew/${image}`)}
            alt={profession}
            className="crewMember__image"
         />
      </section>
   );
};

export default CrewMember;
