import React, { useState } from 'react';
import './menu-dropdown.css';

const MenuDropdown = () => {
    const menuSource=[
        {
            name:'Alojamientos',
            menu:[
                {
                    menuName:'Todos',
                    id:'1k9HPW3ADVGfqaGIzEsMdIqerPogsMl0&ehbc=2E312F'
                },
                {
                    menuName:'1 Estrella',
                    id:'1icng7dWbGSASFCv5UZVPdQLeS3Oxxz4&ehbc=2E312F'
                },
                {
                    menuName:'2 Estrellas',
                    id:'1AFknAhYmm01N2E7BgDiBBoSTZOAqXng&ehbc=2E312F'
                },
                {
                    menuName:'3 Estrellas',
                    id:'1RIrK-2wnNqtOTJX48vFmNPT83KqBM08&ehbc=2E312F'
                },
                {
                    menuName:'4 Estrellas',
                    id:'1Wl_pk0ZNRfpN9vnpAwO4ajF-K6g_A3s&ehbc=2E312F'
                },
                {
                    menuName:'5 Estrellas',
                    id:'1DVbplnQDc_GeSXiCtBDYE7T0Kc4is7U&ehbc=2E312F'
                },
                {
                    menuName:'Apart Hotel',
                    id:'1OwtfMMk7xfNIJwpMDCpmrvOdE18f9HU&ehbc=2E312F'
                },
                {
                    menuName:'Bed & Breakfast',
                    id:'1bjU3xCKUrE6TK5dcxTEpSCyCNCnGq3k&ehbc=2E312F'
                },
                {
                    menuName:'Boutique',
                    id:'1bwUhOSHG7YbfxyT7_Yam2_SypxrMi6s&ehbc=2E312F'
                },
                {
                    menuName:'Hospedaje',
                    id:'1ASEiXDELf44cbC3qW-TdPHlbtN1TIkw&ehbc=2E312F'
                },
                {
                    menuName:'Hostel',
                    id:'1JXGd2cXBf9DZ9d-g0RL_KT0g1cKaN90&ehbc=2E312F'
                },
                {
                    menuName:'Residencia Universitaria',
                    id:'1iECCMmjc_EKclEypx1-SUiFAFms67Yk&ehbc=2E312F'
                },]
        },
        {
            name: 'Bares y Cafés',
            menu: [
                {
                    menuName:'Bares y cafés',
                    id:'1cP6lgGJUsw9h2b5K68YHlMSm1rH8DrQ&ehbc=2E312F'
                },
                {
                    menuName:'Bar Notable',
                    id:'1RVAylHfGwPCrIHCbAAapJCbm6Gfvt98&ehbc=2E312F'
                },
                {
                    menuName:'Café Bar',
                    id:'1wBO17N2Q1o99q8dADLv0AFQIyev6ZLg&ehbc=2E312F'
                },
                {
                    menuName:'Café de Especialidad',
                    id:'1yvJUtloN99sdI4KbBnKY6cpyRHiczF0&ehbc=2E312F'
                },
                {
                    menuName:'Casa de Tango',
                    id:'1zsYtLgZ3QjB7WrBhnuH-GuSSJJXdudM&ehbc=2E312F'
                },
                {
                    menuName:'Cervecería',
                    id:'1r8yp0-9JKohZWevZZ6-XJNpxC5imeaI&ehbc=2E312F'
                },
                {
                    menuName:'Pubs y Bares Temáticos',
                    id:'1nKgrkf6KnqRtMhSvPb2QfjexSfmARz8&ehbc=2E312F'
                },]
        },
        {
            name: 'Confiterías',
            menu: [
                {
                    menuName:'Todos',
                    id:'1J5P5u_Khb_SQkVdtvmJ7mpAGMA1KHaI&ehbc=2E312F'
                },
                {
                    menuName:'Pastelería',
                    id:'1fyWIu28NLIpJFfEgd44HUmvmAHsZXkQ&ehbc=2E312F'
                },
                {
                    menuName:'Pastelería Cafetería',
                    id:'1mo79cHVWyjaCyrnCjtlFDlBB6NWyXPc&ehbc=2E312F'
                },
                {
                    menuName:'Pastelería Pandería',
                    id:'1UedJ9xc8st8w0aEUyG2ycHMoi4aGtbs&ehbc=2E312F'
                },]
        },
        {
            name: 'Restaurantes',
            menu: [
                {
                    menuName:'Todos',
                    id:'1fsaawBbvx0O6PPQy2ke-xMGaXJZIqus&ehbc=2E312F'
                },]
        }
    ]
    const [expandedMenu, setExpandedMenu] = useState('');

  const toggleDropdown = (dropdownName) => {
    setExpandedMenu(expandedMenu === dropdownName ? '' : dropdownName);
  };

  return (
    <div className="menu-dropdown">
      {menuSource.map((category, index) => (
        <div key={index} className="menu-category">
          <div className="category-name" onClick={() => toggleDropdown(category.menu.name)}>
            {category.name}
          </div>
          {expandedMenu === category.name && (
            <ul className="submenu">
              {category.menu.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={`https://www.google.com/maps/d/u/1/embed?mid=${item.menu.id}`} target="_blank" rel="noopener noreferrer">
                    {item.menu.menuName}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuDropdown;