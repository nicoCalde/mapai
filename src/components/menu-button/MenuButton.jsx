import React, { useState } from 'react';
import './menu-button.css';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <span className="menu-icon">{isOpen ? "✖" : "☰"}</span>
    </div>
  );
};

export default MenuButton;