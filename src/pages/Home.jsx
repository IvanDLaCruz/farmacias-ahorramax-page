import Hero from "../components/hero/Hero";
import { Promos } from "../components/sections/promos/Promos";
import ContenedorSucursales from "../components/Sucursales/ContenedorSucursales";
import "../styles/tipografia.css";
import CategoriasSlider from "../components/categorias-productos/CategoriasSlider";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Hero
        title={"Mas barato que las del mono bailarin!"}
        description={
          "Encuentra una amplia variedad de medicamentos genéricos, similares y de patente. También contamos con productos naturales, artículos de ortopedia y todo lo necesario para rehabilitación."
        }
        subtitle={"¡Aprovecha nuestras ofertas! "}
        linkButton={"#promociones-diarias"}
        nameButton={"Ver promociones"}
      />
      <div className="page-wrapper">
        <CategoriasSlider />

        <Promos />
        <ContenedorSucursales />
      </div>
    </>
  );
};
