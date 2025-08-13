import { StrictMode } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenosotros" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
