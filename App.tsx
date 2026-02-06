import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Palladium from './components/Palladium';
import IQRetail from './components/IQRetail';
import Sage200 from './components/Sage200';
import XactERP from './components/XactERP';
import Medeiplus from './components/Medeiplus';
import PrivacyPolicyPage from './components/privacy/page';
import CookiePolicyPage from './components/cookie-policy/page';
import TermsOfServicePage from './components/terms/page';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'about' | 'contact' | 'palladium' | 'iqRetail' | 'sage200' | 'xactErp' | 'medeiplus' | 'privacy' | 'cookies' | 'terms'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'palladium':
        return <Palladium onBack={() => setCurrentPage('products')} />;
      case 'iqRetail':
        return <IQRetail onBack={() => setCurrentPage('products')} />;
      case 'sage200':
        return <Sage200 onBack={() => setCurrentPage('products')} />;
      case 'xactErp':
        return <XactERP onBack={() => setCurrentPage('products')} />;
      case 'medeiplus':
        return <Medeiplus onBack={() => setCurrentPage('products')} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'cookies':
        return <CookiePolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      default:
        return (
          <div className="animate-fade-in">
            <section id="home">
              <Hero />
            </section>

            <section id="products-preview" className="py-24">
              <Products onExplore={() => setCurrentPage('products')} />
            </section>

            <section id="features" className="py-24 bg-zinc-900/30">
              <Features />
            </section>

            <section id="partners" className="py-24">
              <Testimonials />
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="transition-opacity duration-500">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
