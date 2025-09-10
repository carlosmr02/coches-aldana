
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Inventario', href: '/inventario' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const services = [
    'Venta de coches premium',
    'Venta de coches de lujo',
    'Financiación exclusiva',
    'Mantenimiento especializado',
    'Tasación profesional',
    'Seguros premium'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/5048a74b63e346cf9c347c972b1b1757/a328fac3dda77cc1efdf5ea99d8e2c3c.jfif" 
                alt="Aldana Autopremium"
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="text-lg font-bold font-logo tracking-wider">
                  ALDANA
                </span>
                <div className="text-xs font-medium tracking-widest text-gold-400">
                  AUTOPREMIUM
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu concesionario premium de confianza en Talavera de la Reina. Más de 20 años ofreciendo los vehículos más exclusivos y servicios de la más alta calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gold-500 rounded-full transition-all duration-300 group">
                <i className="ri-facebook-fill text-sm group-hover:text-black"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gold-500 rounded-full transition-all duration-300 group">
                <i className="ri-instagram-line text-sm group-hover:text-black"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gold-500 rounded-full transition-all duration-300 group">
                <i className="ri-twitter-x-line text-sm group-hover:text-black"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gold-500 rounded-full transition-all duration-300 group">
                <i className="ri-youtube-line text-sm group-hover:text-black"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gold-400">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm hover:underline"
                >
                  Make with Readdy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gold-400">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm flex items-center">
                  <i className="ri-check-line text-gold-400 mr-2 text-sm"></i>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gold-400">Contacto</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-gold-400 mt-1"></i>
                <div className="text-gray-300">
                  <p className="font-medium">Av. de Madrid, 45</p>
                  <p>45600 Talavera de la Reina</p>
                  <p>Toledo, España</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-gold-400"></i>
                <span className="text-gray-300">925 123 456</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-gold-400"></i>
                <span className="text-gray-300">info@aldanaautopremium.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-gold-400 mt-1"></i>
                <div className="text-gray-300">
                  <p>Lun - Vie: 9:00 - 19:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                  <p>Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Aldana Autopremium. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
