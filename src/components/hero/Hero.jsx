import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
      <img className="logo_ahorra" src="/images/logo-ahorramax-sf.png" alt="" />

        <div className="hero-text">
          <h1 className="titulo">¡Aprovecha nuestras promociones!</h1>
          <p className="subtitulo">Encontrarás una amplia variedad de medicamentos genéricos, similares y de patente. También contamos con productos naturales, artículos de ortopedia y todo lo necesario para rehabilitación.</p>
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
