import "./About.css";
import ExperienciaCounter from "../components/experiencia-counter/ExperienciaCounter";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="heroAbout">
          <img src="images/sucursales_sonora/Suc_Jalisco.jpg" alt="Imagen" />
          <h1>Sobre nosotros</h1>
          <div className="statistics">
            <ExperienciaCounter numeroFinal={15} duracion={1000} texto={"Años de experiencia"} />
            <ExperienciaCounter numeroFinal={20} duracion={1000} texto={"Sucursales"} />
            <ExperienciaCounter numeroFinal={6} duracion={1000} texto={"Ciudades"} />
            <ExperienciaCounter numeroFinal={2} duracion={1000} texto={"Estados"} />
          </div>
        </div>

        <div className="about-page-wrapper">
        <div className="container">
          <h2>¿Quienes somos?</h2>
          <p>
            Somos un grupo de farmacias con más de 15 años de experiencia, con
            presencia en Sinaloa y Sonora, con 20 sucursales que brindan acceso a
            medicamentos de calidad y precios accesibles para las familias
            mexicanas. En nuestro amplio catálogo de productos podrás encontrar
            todo tipo de medicamento genérico, similar y de patente, así como
            productos naturales y artículos de ortopedia y rehabilitación.
          </p>
        </div>
      </div>
      
        
      </div>
    </>
  );
};

