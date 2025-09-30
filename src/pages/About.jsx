import "./About.css";
import ExperienciaCounter from "../components/experiencia-counter/ExperienciaCounter";


export const About = () => {
  return (
    <main className="about">
      
      
      <section className="about-hero">
        <img 
          src="images/sucursales_sonora/Suc_Jalisco.jpg" 
          alt="Sucursal Jalisco" 
        />
        <h1 className="about-hero-title">Sobre nosotros</h1>
        
        <div className="about-statistics">
          <ExperienciaCounter numeroFinal={15} duracion={1000} texto="Años de experiencia" />
          <ExperienciaCounter numeroFinal={20} duracion={1000} texto="Sucursales" />
          <ExperienciaCounter numeroFinal={6} duracion={1000} texto="Ciudades" />
          <ExperienciaCounter numeroFinal={2} duracion={1000} texto="Estados" />
        </div>
      </section>

      
      <section className="about-container">
        
        <article className="about-container-description">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un grupo de farmacias con más de 15 años de experiencia, con
            presencia en Sinaloa y Sonora, con 20 sucursales que brindan acceso a
            medicamentos de calidad y precios accesibles para las familias
            mexicanas. En nuestro amplio catálogo de productos podrás encontrar
            todo tipo de medicamento genérico, similar y de patente, así como
            productos naturales y artículos de ortopedia y rehabilitación.
          </p>
        </article>

        <article className="about-container-mision">
          <h2>Misión</h2>
          <p>
            Brindar a nuestros clientes un servicio de calidad y 
            ofrecer una amplia gama de productos a precios justos 
            que nos permitan ser la mejor opción para cuidar de su salud.
          </p>
        </article>

        <article className="about-container-vision">
          <h2>Visión</h2>
          <p>
            Ser el grupo de farmacias líder a nivel regional, 
            reconocidas por sus productos de calidad, 
            servicio personalizado y precios accesibles.
          </p>
        </article>

      </section>
    </main>
  );
};