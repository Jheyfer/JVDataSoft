import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Features from './layout/feature.jsx'
import Header from './layout/header.jsx'
import Footer from './layout/footer.jsx'
import Hero from './layout/hero.jsx'
import AboutUs from './layout/AboutUs.jsx'
import Service from './layout/service.jsx'
import Form from './layout/form.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <AboutUs />
    <Features />
    <Service />
    <Form />
    <Footer />
  </StrictMode>,
)
