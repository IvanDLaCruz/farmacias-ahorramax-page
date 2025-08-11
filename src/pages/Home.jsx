import Hero from "../components/hero/Hero";
import { Promos } from "../components/sections/promos/Promos";
import ContenedorSucursales from "../components/Sucursales/ContenedorSucursales";
import BotonWhatsApp from "../components/boton-whatsapp/BotonWhastapp";
import { Footer } from "../components/footer/Footer";
import "../styles/tipografia.css";

export const Home = () => {
  return (
    <>
      <Hero />
      <Promos />
      <ContenedorSucursales />
      <BotonWhatsApp />
      <Footer />
    </>
  );
};
