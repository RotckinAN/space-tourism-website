import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({ links, isOpen, handleButtonClick }) => {
   let activeStyle = {
      borderRight: 'solid 4px #ffffff',
   };

   const handleSideBarCloseByOverlay = (evt) => {
      if (evt.target.classList.contains('sideBar_opened')) {
         handleButtonClick();
      }
   };

   return (
      <div
         className={`sideBar ${isOpen ? 'sideBar_opened' : ''}`}
         onClick={handleSideBarCloseByOverlay}
      >
         <nav
            className={`sideBar__navigateContainer ${
               isOpen ? 'sideBar__navigateContainer_opened' : ''
            }`}
         >
            <button
               className="sideBar__buttonClose"
               onClick={handleButtonClick}
            ></button>
            <ul className="sideBar__linkContainer">
               {links.map((link) => {
                  return (
                     <li className="sideBar__linkList" key={link._id}>
                        <NavLink
                           to={link.path}
                           className="sideBar__link"
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
         </nav>
      </div>
   );
};

export default SideBar;
