import React from 'react';
import './Hero.css'; // Si decides usar un archivo CSS

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-logo">
          <img src="public/images/logo-ahorramax-sf.png" alt="Farmacia Ahorra Max Logo" />
        </div>
        
        <div className="hero-offer">
          <h1 className="offer-title">25% DE DESCUENTO</h1>
          <h2 className="offer-subtitle">TODOS LOS DÍAS</h2>
        </div>
        
        <p className="hero-description">
          En Farmacias Ahorra Max, tu salud y economía son importantes. Aprovecha nuestro descuento diario en una amplia selección de productos.
        </p>
        
        <button className="cta-button">
          Ver Productos en Oferta
        </button>
      </div>
    </section>
  );
};

export default Hero;