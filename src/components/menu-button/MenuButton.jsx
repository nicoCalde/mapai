import React, { useState } from 'react';
import MenuDropdown from '../menu-dropdown/MenuDropdown';
import './menu-button.css';

const MenuButton = () => {
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
        {isOpen && <MenuDropdown />}
      </div>
    </div>
  );
};

export default MenuButton;