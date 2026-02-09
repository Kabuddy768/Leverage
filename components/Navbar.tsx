
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Products', path: '/products', id: 'products' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Partners', path: '/partners', id: 'partners' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLinkClick}
          >
            <img src="/logos/Logo1.png" alt="Office Choice Solutions" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight block">
              Office Choice <span className="text-zinc-400 font-light">Solutions Ltd</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
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
            <Link
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}
              className={`block w-full text-left text-lg font-medium ${isActive(link.path) ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              navigate('/contact');
              handleLinkClick();
            }}
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

