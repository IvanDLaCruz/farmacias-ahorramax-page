import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/hero/Hero'
import ContenedorSucursales from './components/Sucursales/ContenedorSucursales'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Promos } from './components/sections/promos/Promos'
import BotonWhatsApp from './components/boton-whatsapp/BotonWhastapp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <Promos/>
    <ContenedorSucursales/>
    <BotonWhatsApp/>
  </StrictMode>,
)
