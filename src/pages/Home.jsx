import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../assets/style/home.css';
import logo from '../assets/img/logo-junto.png'; 

function Home() {
  return (
    <div className='background-container'>
        <div className='home-container'>
            <div className="top-left-image">
                <img src={logo} alt="AHRCC" />
            </div>
            <div className="flex-container">
                <div className="text-container">
                    <div className="subtitle-container">Encontrá hoteles, restaurantes, confiterías y cafés de la ciudad</div>
                    <div className="title-container">Descubrí Buenos Aires con nuestro mapa interactivo</div>
                </div>
                <div className="button-container">
                    <Link id='link' to="/mapas">Ver mapa</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home