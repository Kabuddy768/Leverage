
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'products' | 'about' | 'contact') => void;
  currentPage: 'home' | 'products' | 'about' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { name: 'Products', action: () => onNavigate('products'), id: 'products' },
    { name: 'About', action: () => onNavigate('about'), id: 'about' },
    { name: 'Partners', href: '#partners', id: 'partners' },
    { name: 'Contact', action: () => onNavigate('contact'), id: 'contact' },
  ];

  const handleLinkClick = (link: any) => {
    if (link.action) {
      link.action();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src="/logos/Logo1.png" alt="Office Choice Solutions" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight block">
              Office Choice <span className="text-zinc-400 font-light">Solutions Ltd</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className={`text-sm font-medium transition-colors ${currentPage === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
            {/* <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-zinc-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </button> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 p-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className={`block w-full text-left text-lg font-medium ${currentPage === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick({ action: () => onNavigate('contact') })}
            className="w-full bg-white text-zinc-950 px-5 py-3 rounded-xl text-center font-bold"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
