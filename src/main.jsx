import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero/Hero'
import SelectorEstado from './components/Sucursales/SelectorEstado'
import ContenedorSucursales from './components/Sucursales/ContenedorSucursales'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <ContenedorSucursales/>
  </StrictMode>,
)
