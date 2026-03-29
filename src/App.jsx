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
      <Navbar />
      <Header />
      <Services />
      <Gallery />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
