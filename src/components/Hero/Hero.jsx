import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>¡Mas barato que las del mono bailarin!</h1>
          <p>¡Aprovecha nuestras ofertas! Encuentra una amplia variedad de medicamentos genéricos, similares y de patente. También contamos con productos naturales, artículos de ortopedia y todo lo necesario para rehabilitación.</p>
          <a href="#ofertas" className="hero-button">Ver promociones</a>
        </div>
        <div className="hero-image">
          <img
            src="/images/promo-25.png"
            alt="Promoción del 25% de descuento"
            className="promo-img"
            />   
        </div>
        
      </div>
    </section>
    
  );
}

export default Hero;
