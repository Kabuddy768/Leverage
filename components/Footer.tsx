
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'products' | 'about' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-zinc-950 font-black">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Office Choice Solutions</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Kenya's premier ERP value-added reseller. Specialist implementers of world-class enterprise systems for modern African businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-500">Solutions</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Palladium Accounting</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">IQ Retail</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Xact ERP</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Sage 200</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Medeiplus</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-500">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Implementation Team</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-500">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                <span>Nairobi, Kenya<br />Kilimani Business Center</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+254721123536" className="hover:text-white">+254 721 123 536</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:info@officechoicesolutions.co.ke" className="hover:text-white">info@officechoicesolutions.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Office Choice Solutions Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
