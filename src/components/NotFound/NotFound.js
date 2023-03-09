import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ notFoundPageContent }) => {
   const { title, paragraph, buttonLinkText } = notFoundPageContent;

   let navigate = useNavigate();
   const handleClick = () => {
      navigate('/');
   };

   return (
      <div className="notFound">
         <h1 className="notFound__title">{title}</h1>
         <p className="notFound__subTitle">{paragraph}</p>
         <button onClick={handleClick} className="notFound__button">
            {buttonLinkText}
         </button>
      </div>
   );
};

export default NotFound;
