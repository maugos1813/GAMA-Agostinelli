import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth min-h-screen">
      {/* Skip link — accesibilidad para navegación por teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-principal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-barlow focus:text-sm focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Header />
        <Services />
        <Gallery />
        <About />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
