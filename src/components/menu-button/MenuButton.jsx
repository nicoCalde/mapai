import React, { useState } from 'react';
import MenuDropdown from '../menu-dropdown/MenuDropdown';
import './menu-button.css';
import logo from '../../assets/img/logo-junto-negro.png'

const MenuButton = ({ handleMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="button-container">
      <div className={`floating-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="menu-icon">{isOpen ? "✖" : "☰"}</span>
      </div>
      <div className="menu-container">
        {isOpen && <MenuDropdown handleMenuClick={handleMenuClick} />}
      </div>
      <div className="logo">
        <img src={logo} alt="AHRCC" />
      </div>
    </div>
  );
};

export default MenuButton;