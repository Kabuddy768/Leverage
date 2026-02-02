
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="products" className="py-24">
          <Products />
        </section>

        <section id="features" className="py-24 bg-zinc-900/30">
          <Features />
        </section>

        <section id="partners" className="py-24">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
