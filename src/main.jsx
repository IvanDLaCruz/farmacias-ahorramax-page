import { StrictMode } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";

const About = () => <h2>Sobre Nosotros</h2>;
const Contact = () => <h2>Contacto</h2>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
