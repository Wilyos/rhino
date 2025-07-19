import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { Services } from './components/Services'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Numbers from './components/Numbers'
import Gallery from './components/Gallery'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Numbers />
      <Gallery />
  </StrictMode>,
)
