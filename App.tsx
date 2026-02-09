
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import Medeilplus from './components/Medeilplus';
import PrivacyPolicyPage from './components/privacy/page';
import CookiePolicyPage from './components/cookie-policy/page';
import TermsOfServicePage from './components/terms/page';
import PartnersPage from './components/PartnersPage';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
          <Navbar />

          <main className="transition-opacity duration-500">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={
                <div className="animate-fade-in">
                  <SEO
                    title="Office Choice Solutions Ltd | Leading ERP Specialists in Kenya"
                    description="Premier ERP value-added reseller in Kenya. Specialists in Palladium, Sage 200, IQ Retail, and Xact ERP implementations for modern African businesses."
                  />
                  <section id="home">
                    <Hero />
                  </section>
                  <section id="products-preview" className="py-24">
                    <Products />
                  </section>
                  <section id="features" className="py-24 bg-zinc-900/30">
                    <Features />
                  </section>
                  <section id="partners" className="py-24">
                    <Testimonials />
                  </section>
                </div>
              } />

              {/* Main Solution Pages */}
              <Route path="/products" element={
                <>
                  <SEO title="ERP Solutions | Office Choice Solutions" description="Explore our suite of ERP solutions including Palladium, IQ Retail, Sage 200, and Xact ERP tailored for Kenyan businesses." />
                  <ProductsPage />
                </>
              } />

              <Route path="/about" element={
                <>
                  <SEO title="About Us | Office Choice Solutions" description="Learn about Office Choice Solutions, Kenya's leading ERP implementation partners and our commitment to business excellence." />
                  <AboutPage />
                </>
              } />

              <Route path="/contact" element={
                <>
                  <SEO title="Contact Us | Office Choice Solutions" description="Get in touch with Office Choice Solutions for ERP consultation, support, and implementation inquiries." />
                  <ContactPage />
                </>
              } />

              <Route path="/partners" element={
                <>
                  <SEO title="Our Partners | Office Choice Solutions" description="Discover our ecosystem of strategic partners and success stories across various industries." />
                  <PartnersPage />
                </>
              } />

              {/* Individual Product Pages */}
              <Route path="/products/palladium" element={
                <>
                  <SEO title="Palladium Accounting ERP | Office Choice Solutions" description="Palladium Accounting Software: A robust, feature-rich solution for SMEs offering big business functionality at an affordable price." />
                  <Palladium />
                </>
              } />

              <Route path="/products/iq-retail" element={
                <>
                  <SEO title="IQ Retail Logic | Office Choice Solutions" description="IQ Retail: The definitive point of sale and retail management solution for specialized retail environments and multi-branch enterprises." />
                  <IQRetail />
                </>
              } />

              <Route path="/products/sage-200" element={
                <>
                  <SEO title="Sage 200 Evolution | Office Choice Solutions" description="Sage 200 Evolution: Enterprise-grade ERP solution delivering total control over your financial and operational environment." />
                  <Sage200 />
                </>
              } />

              <Route path="/products/xact-erp" element={
                <>
                  <SEO title="Xact ERP Manufacturing | Office Choice Solutions" description="Xact ERP: Precision engineering for manufacturing and distribution. Streamline your production from raw materials to finished goods." />
                  <XactERP />
                </>
              } />

              <Route path="/products/medeilplus" element={
                <>
                  <SEO title="Medeilplus Healthcare ERP | Office Choice Solutions" description="Medeilplus: Specialized usage-based ERP for healthcare administration, patient management, and medical billing." />
                  <Medeilplus />
                </>
              } />

              {/* Legal Pages */}
              <Route path="/privacy" element={
                <>
                  <SEO title="Privacy Policy | Office Choice Solutions" description="Our privacy policy outlining how we collect, use, and protect your personal information." />
                  <PrivacyPolicyPage />
                </>
              } />

              <Route path="/cookies" element={
                <>
                  <SEO title="Cookie Policy | Office Choice Solutions" description="Information about how we use cookies and tracking technologies on our website." />
                  <CookiePolicyPage />
                </>
              } />

              <Route path="/terms" element={
                <>
                  <SEO title="Terms of Service | Office Choice Solutions" description="Terms and conditions for using Office Choice Solutions website and services." />
                  <TermsOfServicePage />
                </>
              } />

            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
