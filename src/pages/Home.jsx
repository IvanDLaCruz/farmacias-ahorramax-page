import Hero from "../components/hero/Hero";
import { Promos } from "../components/sections/promos/Promos";
import ContenedorSucursales from "../components/Sucursales/ContenedorSucursales";

import "../styles/tipografia.css";
import CategoriasSlider from "../components/categorias-productos/CategoriasSlider";
import "./Home.css"


export const Home = () => {
  return (
    <>
      <Hero />
     <div className="page-wrapper">
        <Promos />
        <ContenedorSucursales />
        <CategoriasSlider />
      </div>
      
    </>
  );
};
