import React from 'react';
import { Link } from 'react-router-dom';
const Main = ({ mainPageContent }) => {
   const { title, subTitle, paragraph, buttonLinkText } = mainPageContent;

   return (
      <main className="main">
         <article className="main__titleContainer">
            <h1 className="main__title">{title}</h1>
            <h2 className="main__subTitle">{subTitle}</h2>
            <p className="main__paragraph">{paragraph}</p>
         </article>
         <Link to={'/destination'} className="main__linkButton">
            {buttonLinkText}
         </Link>
      </main>
   );
};

export default Main;
