
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function SobreNosotros() {
  const navigate = useNavigate();

  const values = [
    {
      icon: 'ri-star-line',
      title: 'Excelencia',
      description: 'Comprometidos con los más altos estándares de calidad en cada servicio que ofrecemos.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Confianza',
      description: 'Más de dos décadas construyendo relaciones duraderas basadas en la transparencia.'
    },
    {
      icon: 'ri-vip-crown-line',
      title: 'Exclusividad',
      description: 'Experiencia premium personalizada para cada cliente, adaptada a sus necesidades únicas.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Pasión',
      description: 'Amor genuino por los automóviles de lujo y dedicación total a nuestros clientes.'
    }
  ];

  const team = [
    {
      name: 'Roberto Aldana',
      position: 'Director General',
      experience: '25 años de experiencia',
      description: 'Fundador y visionario de Aldana Autopremium, experto en vehículos de lujo.',
      image: 'Professional car dealership owner in elegant business suit, confident automotive executive, sophisticated businessman in luxury showroom environment'
    },
    {
      name: 'Carmen Vega',
      position: 'Directora de Ventas',
      experience: '18 años de experiencia',
      description: 'Especialista en atención premium y asesoramiento personalizado.',
      image: 'Professional female automotive sales manager in elegant business attire, confident car dealership executive, sophisticated woman in luxury vehicle showroom'
    },
    {
      name: 'Miguel Torres',
      position: 'Jefe de Taller',
      experience: '22 años de experiencia',
      description: 'Maestro mecánico certificado en las principales marcas de lujo.',
      image: 'Professional automotive service manager in clean workshop uniform, experienced car mechanic supervisor, skilled technician in modern garage facility'
    },
    {
      name: 'Laura Martín',
      position: 'Asesora Financiera',
      experience: '15 años de experiencia',
      description: 'Experta en soluciones de financiación para vehículos premium.',
      image: 'Professional female financial advisor in business suit, automotive finance specialist, confident woman in modern office environment'
    }
  ];

  const milestones = [
    { year: '2003', event: 'Fundación de Aldana Autopremium en Talavera de la Reina' },
    { year: '2008', event: 'Ampliación de instalaciones y primer showroom premium' },
    { year: '2012', event: 'Certificación como concesionario oficial de marcas de lujo' },
    { year: '2018', event: 'Inauguración del taller especializado de última generación' },
    { year: '2021', event: 'Expansión digital y servicios VIP personalizados' },
    { year: '2024', event: 'Más de 5,000 vehículos premium vendidos' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Elegant%20luxury%20car%20dealership%20building%20exterior%20in%20Talavera%20de%20la%20Reina%2C%20modern%20automotive%20showroom%20architecture%2C%20professional%20business%20facade%2C%20sophisticated%20commercial%20building%20with%20premium%20vehicles%20visible%20through%20glass%20windows&width=1920&height=800&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Nuestra <span className="text-gold-400">Historia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Más de 20 años de excelencia en el sector automotriz premium, 
              construyendo confianza y satisfacción en cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Una Tradición de <span className="text-gold-400">Excelencia</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Fundada en 2003 por Roberto Aldana, <strong className="text-gold-400">Aldana Autopremium</strong> nació 
                  de la pasión por los vehículos de lujo y el compromiso inquebrantable con la 
                  satisfacción del cliente.
                </p>
                
                <p>
                  Desde nuestros humildes comienzos en Talavera de la Reina, hemos crecido hasta 
                  convertirnos en el concesionario premium de referencia en la región, manteniendo 
                  siempre nuestros valores fundamentales de calidad, confianza y servicio excepcional.
                </p>
                
                <p>
                  Hoy, con más de dos décadas de experiencia, continuamos innovando y expandiendo 
                  nuestros servicios para ofrecer a nuestros clientes la experiencia más completa 
                  y satisfactoria en el mundo del automóvil de lujo.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">5,000+</div>
                  <div className="text-gray-400">Vehículos Vendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">20+</div>
                  <div className="text-gray-400">Años de Experiencia</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20car%20dealership%20owner%20Roberto%20Aldana%20in%20elegant%20business%20suit%20standing%20in%20luxury%20showroom%2C%20sophisticated%20automotive%20executive%2C%20confident%20businessman%20with%20premium%20vehicles%20in%20background&width=600&height=500&seq=founder&orientation=landscape"
                alt="Roberto Aldana - Fundador"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-black p-6 rounded-xl shadow-lg">
                <div className="text-sm font-medium">FUNDADOR</div>
                <div className="text-lg font-bold">Roberto Aldana</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-gold-500">Valores</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en Aldana Autopremium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:border-gold-500 border border-gray-600">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gold-400 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro <span className="text-gold-400">Equipo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesionales experimentados dedicados a ofrecerte el mejor servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-600 hover:border-gold-500">
                <div className="relative">
                  <img
                    src={`https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=300&height=300&seq=team-${index}&orientation=squarish`}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-gold-400 font-medium mb-2">
                    {member.position}
                  </div>
                  <div className="text-gray-400 text-sm mb-4">
                    {member.experience}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra <span className="text-gold-400">Evolución</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hitos importantes en nuestro camino hacia la excelencia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-400 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-gray-800 p-6 rounded-xl shadow-md border border-gray-600 hover:border-gold-500 transition-colors duration-300 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-2xl font-bold text-gold-400 mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center my-4 lg:my-0 relative z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 lg:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestras <span className="text-gold-500">Instalaciones</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Espacios diseñados para ofrecer una experiencia premium completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20car%20showroom%20interior%20with%20premium%20vehicles%20on%20display%2C%20elegant%20automotive%20retail%20space%2C%20sophisticated%20showroom%20design%20with%20modern%20lighting%20and%20marble%20floors&width=400&height=250&seq=showroom&orientation=landscape"
                alt="Showroom Premium"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Showroom Premium
                </h3>
                <p className="text-gray-300">
                  Espacio elegante de 800m² donde podrás apreciar nuestra selección de vehículos de lujo.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20automotive%20service%20workshop%20with%20advanced%20equipment%2C%20professional%20car%20maintenance%20facility%2C%20clean%20organized%20garage%20with%20high-tech%20diagnostic%20tools&width=400&height=250&seq=workshop-facilities&orientation=landscape"
                alt="Taller Especializado"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Taller Especializado
                </h3>
                <p className="text-gray-300">
                  Instalaciones de 1,200m² equipadas con la tecnología más avanzada del sector.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
              <img
                src="https://readdy.ai/api/search-image?query=Elegant%20customer%20lounge%20area%20in%20luxury%20car%20dealership%2C%20comfortable%20waiting%20area%20with%20premium%20furniture%2C%20sophisticated%20client%20reception%20space&width=400&height=250&seq=lounge&orientation=landscape"
                alt="Zona VIP"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Zona VIP
                </h3>
                <p className="text-gray-300">
                  Área exclusiva de atención personalizada con todas las comodidades premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Quieres conocernos <span className="text-gold-400">personalmente</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Te invitamos a visitar nuestras instalaciones y descubrir por qué somos 
            la referencia en vehículos premium en Talavera de la Reina.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold"
              onClick={() => navigate('/contacto')}
            >
              <i className="ri-map-pin-line mr-2"></i>
              Visitar Instalaciones
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => navigate('/contacto')}
            >
              <i className="ri-team-line mr-2"></i>
              Conocer al Equipo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
