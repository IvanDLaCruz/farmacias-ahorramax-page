
import { StrictMode } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home } from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
      </>
    </BrowserRouter>
  </StrictMode>
);

