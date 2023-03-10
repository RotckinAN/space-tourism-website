import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { navLink } from '../../utils/content';

const Header = () => {
   const [isSideBarOpen, setIsSideBarOpen] = useState(false);

   let activeStyle = {
      paddingBottom: '38px',
      borderBottom: 'solid 3px #ffffff',
   };

   const handleButtonSideBarOpen = () => {
      setIsSideBarOpen(true);
   };

   const handleButtonSideBarClose = () => {
      setIsSideBarOpen(false);
   };

   return (
      <header className="header">
         <Link to={'/'} className="header__linkLogo" aria-label="mainPage">
            <div className="header__logo"></div>
         </Link>
         <nav className="header__navigate">
            <ul className="header__navigateList">
               {navLink.map((link) => {
                  return (
                     <li className="header__navigateLinkList" key={link._id}>
                        <NavLink
                           to={link.path}
                           className="header__navigateLink"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                        >
                           <span>{link.number} </span>
                           {link.title}
                        </NavLink>
                     </li>
                  );
               })}
            </ul>
            <button
               className="header__sideBarOpenButton"
               onClick={handleButtonSideBarOpen}
            ></button>
            <SideBar
               links={navLink}
               isOpen={isSideBarOpen}
               handleButtonClick={handleButtonSideBarClose}
            />
         </nav>
      </header>
   );
};

export default Header;
