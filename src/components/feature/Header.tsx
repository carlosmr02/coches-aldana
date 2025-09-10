
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Inventario', href: '/inventario' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-black to-gray-800 shadow-2xl sticky top-0 z-50 animate-slide-in">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="https://static.readdy.ai/image/5048a74b63e346cf9c347c972b1b1757/a328fac3dda77cc1efdf5ea99d8e2c3c.jfif" 
                alt="Aldana Autopremium"
                className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 animate-float"
              />
              <div className="text-white">
                <span className="text-xl font-bold font-logo tracking-wider group-hover:text-gold-400 transition-colors duration-300">
                  ALDANA
                </span>
                <div className="text-sm font-medium tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors duration-300">
                  AUTOPREMIUM
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 animate-fade-in ${
                    isActive(item.href)
                      ? 'text-gold-400 border-b-2 border-gold-400'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-scale-in" style={{animationDelay: '0.8s'}}>
            <Button variant="primary" size="sm" className="bg-gold-500 hover:bg-gold-600 text-black border-none">
              <i className="ri-phone-line mr-2"></i>
              Llámanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700 rounded-b-lg">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg hover:scale-105 animate-slide-in ${
                    isActive(item.href)
                      ? 'text-gold-400 bg-gray-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Button variant="primary" size="sm" className="w-full bg-gold-500 hover:bg-gold-600 text-black">
                  <i className="ri-phone-line mr-2"></i>
                  Llámanos
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
