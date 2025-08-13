import "./hero.css";

function Hero({title, description, subtitle, nameButton, linkButton}) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{subtitle}<strong>{description}</strong></p>
          <a href={linkButton} className="hero-button">{nameButton}</a>
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
