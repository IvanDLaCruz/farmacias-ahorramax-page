import { StrictMode } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";
import {Footer} from "./components/footer/Footer";
import BotonWhatsApp from "./components/boton-whatsapp/BotonWhastapp";
import "./styles/tipografia.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
       <BotonWhatsApp/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
