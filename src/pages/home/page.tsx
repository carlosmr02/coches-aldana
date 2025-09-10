
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'ri-car-line',
      title: 'Vehículos Premium',
      description:
        'Selección exclusiva de vehículos de lujo y alta gama de las mejores marcas',
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Garantía Exclusiva',
      description:
        'Todos nuestros vehículos incluyen garantía extendida y certificación premium',
    },
    {
      icon: 'ri-vip-crown-line',
      title: 'Servicio VIP',
      description:
        'Atención personalizada y servicios exclusivos para clientes distinguidos',
    },
    {
      icon: 'ri-tools-line',
      title: 'Mantenimiento Especializado',
      description:
        'Taller premium con técnicos certificados y tecnología de vanguardia',
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      location: 'Talavera de la Reina',
      text: 'Servicio excepcional y atención de lujo. Mi BMW está impecable y el trato fue extraordinario.',
      rating: 5,
    },
    {
      name: 'Carlos Mendoza',
      location: 'Toledo',
      text: 'Profesionalidad absoluta. Me ayudaron a encontrar el Mercedes perfecto para mi empresa.',
      rating: 5,
    },
    {
      name: 'Ana Martín',
      location: 'Oropesa',
      text: 'El mejor concesionario premium de la región. Calidad, elegancia y confianza total.',
      rating: 5,
    },
  ];

  const brands = [
    'Mercedes-Benz',
    'BMW',
    'Audi',
    'Porsche',
    'Lexus',
    'Jaguar',
    'Land Rover',
    'Volvo',
    'Tesla',
    'Maserati',
    'Alfa Romeo',
    'Genesis',
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(31, 31, 31, 0.5)),
          url('https://readdy.ai/api/search-image?query=Luxury%20premium%20car%20dealership%20showroom%20with%20elegant%20black%20and%20gray%20vehicles%2C%20sophisticated%20lighting%2C%20modern%20architecture%2C%20high-end%20automotive%20retail%20space%2C%20professional%20atmosphere%2C%20sleek%20design%2C%20contemporary%20interior%20with%20dark%20marble%20floors%20and%20premium%20finishes&width=1920&height=1080&seq=hero-dark-showroom&orientation=landscape')`,
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8 animate-slide-up">
            <img
              src="https://static.readdy.ai/image/5048a74b63e346cf9c347c972b1b1757/a328fac3dda77cc1efdf5ea99d8e2c3c.jfif"
              alt="Aldana Autopremium"
              className="h-16 w-16 mx-auto mb-4 object-contain animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in">
            <span className="font-logo tracking-wider">ALDANA</span>
            <br />
            <span className="text-gold-400 font-display text-3xl md:text-5xl tracking-widest animate-glow">
              AUTOPREMIUM
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Experiencia premium en vehículos de lujo. Descubre nuestra exclusiva
            selección de automóviles de alta gama en el corazón de Talavera de la
            Reina.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold hover:shadow-gold-500/30"
              onClick={() => navigate('/inventario')}
            >
              <i className="ri-car-line mr-2"></i>
              Explorar Colección
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black"
              onClick={() => window.open('tel:925123456', '_self')}
            >
              <i className="ri-phone-line mr-2"></i>
              925 123 456
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <i className="ri-arrow-down-line text-gold-400 text-2xl"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              ¿Por qué elegir{' '}
              <span className="text-gold-500">Aldana Autopremium</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Somos el concesionario premium líder en Talavera de la Reina.
              Ofrecemos una experiencia exclusiva en la adquisición y
              mantenimiento de vehículos de lujo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-600 group hover:border-gold-400 animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-900 text-gold-400 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vehículos <span className="text-gold-400">Exclusivos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre nuestra selecta colección de vehículos premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                brand: 'Mercedes-Benz',
                model: 'S-Class',
                year: '2024',
                km: '2.500 km',
                fuel: 'Híbrido',
                price: '89.900€',
              },
              {
                brand: 'BMW',
                model: 'X7 M50i',
                year: '2023',
                km: '8.500 km',
                fuel: 'Gasolina',
                price: '95.500€',
              },
              {
                brand: 'Audi',
                model: 'RS6 Avant',
                year: '2024',
                km: '1.200 km',
                fuel: 'Gasolina',
                price: '125.750€',
              },
            ].map((car, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-2xl shadow-2xl border border-gray-600 hover:border-gold-500 transition-all duration-500 group overflow-hidden animate-scale-in hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold-500/20"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://readdy.ai/api/search-image?query=Luxury%20$%7Bcar.brand%7D%20$%7Bcar.model%7D%20premium%20car%20in%20elegant%20dark%20showroom%20lighting%2C%20sophisticated%20black%20or%20dark%20gray%20finish%2C%20professional%20automotive%20photography%2C%20premium%20vehicle%20display%20high-end%20car%20dealership%20presentation%20style%20sleek%20modern%20design%20with%20dark%20atmosphere&width=400&height=250&seq=dark-car-${index}&orientation=landscape`}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold animate-bounce-gentle">
                    Premium
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {car.year} • {car.km} • {car.fuel}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold-400 group-hover:text-gold-300 transition-colors duration-300">
                      {car.price}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                      onClick={() => navigate('/inventario')}
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold"
              onClick={() => navigate('/inventario')}
            >
              Ver Toda la Colección
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-gradient-to-b from-gray-300 to-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fade-in">
            Marcas <span className="text-gold-500">Premium</span>
          </h2>
          <p className="text-xl text-gray-800 mb-16 max-w-3xl mx-auto animate-slide-up">
            Representantes oficiales de las marcas de lujo más prestigiosas del mundo
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-600 group hover:border-gold-400 animate-scale-in hover:-translate-y-1 hover:bg-gray-700 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate('/inventario')}
              >
                <p className="font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experiencias <span className="text-gold-400">Excepcionales</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Miles de clientes satisfechos avalan nuestra excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-gold-500 transition-all duration-500 group animate-slide-up hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-gold-400 text-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-gold-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(31, 31, 31, 0.6)),
          url('https://readdy.ai/api/search-image?query=Professional%20luxury%20car%20dealership%20team%20in%20elegant%20dark%20showroom%2C%20sophisticated%20automotive%20sales%20staff%20in%20premium%20black%20and%20gray%20environment%2C%20high-end%20vehicles%20in%20background%2C%20modern%20luxury%20retail%20space%20professional%20business%20atmosphere%20with%20dark%20lighting&width=1920&height=600&seq=cta-dark-team&orientation=landscape')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
            ¿Listo para la{' '}
            <span className="text-gold-400 animate-glow">experiencia premium</span>?
          </h2>
          <p
            className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Nuestro equipo de especialistas en vehículos de lujo está preparado para
            ofrecerte una experiencia única. Visita nuestro showroom o contáctanos
            para una cita personalizada.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold"
              onClick={() => navigate('/contacto')}
            >
              <i className="ri-map-pin-line mr-2"></i>
              Visitar Showroom
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black"
              onClick={() => navigate('/contacto')}
            >
              <i className="ri-phone-line mr-2"></i>
              Consulta VIP
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
