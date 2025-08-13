import { StrictMode } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import BotonWhatsApp from "./components/boton-whatsapp/BotonWhastapp";


const About = () => <h2>Sobre Nosotros</h2>;
const Contact = () => <h2>Contacto</h2>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
      <BotonWhatsApp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
