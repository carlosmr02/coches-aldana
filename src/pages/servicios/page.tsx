
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function Servicios() {
  const navigate = useNavigate();

  const services = [
    {
      icon: 'ri-car-line',
      title: 'Venta de Vehículos Premium',
      description: 'Selección exclusiva de vehículos de lujo nuevos y seminuevos de las mejores marcas del mercado.',
      features: ['Vehículos certificados', 'Garantía extendida', 'Financiación personalizada', 'Entrega premium']
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Financiación Exclusiva',
      description: 'Opciones de financiación flexibles y personalizadas para hacer realidad la compra de tu vehículo premium.',
      features: ['Hasta 96 meses', 'Sin entrada inicial', 'Tasas preferenciales', 'Aprobación rápida']
    },
    {
      icon: 'ri-tools-line',
      title: 'Mantenimiento Especializado',
      description: 'Servicio técnico especializado con tecnología de vanguardia y técnicos certificados por marca.',
      features: ['Técnicos certificados', 'Piezas originales', 'Tecnología avanzada', 'Garantía de servicio']
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'Tasación Profesional',
      description: 'Evaluación precisa y profesional del valor de tu vehículo actual para optimizar tu inversión.',
      features: ['Evaluación gratuita', 'Precio de mercado', 'Informe detallado', 'Proceso transparente']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Seguros Premium',
      description: 'Cobertura integral especializada en vehículos de lujo con las mejores compañías aseguradoras.',
      features: ['Cobertura total', 'Asistencia 24/7', 'Vehículo de sustitución', 'Talleres especializados']
    },
    {
      icon: 'ri-vip-crown-line',
      title: 'Servicio VIP',
      description: 'Atención personalizada y exclusiva para clientes distinguidos con servicios premium.',
      features: ['Atención personalizada', 'Recogida y entrega', 'Asesor dedicado', 'Servicios a domicilio']
    }
  ];

  const financingOptions = [
    {
      title: 'Renting Premium',
      description: 'Disfruta de tu vehículo premium sin preocupaciones',
      benefits: ['Sin entrada inicial', 'Mantenimiento incluido', 'Seguro a todo riesgo', 'Cambio de vehículo'],
      monthlyFrom: '599€'
    },
    {
      title: 'Leasing Profesional',
      description: 'Solución fiscal óptima para profesionales y empresas',
      benefits: ['Deducción fiscal', 'IVA deducible', 'Sin inversión inicial', 'Renovación programada'],
      monthlyFrom: '799€'
    },
    {
      title: 'Financiación Tradicional',
      description: 'Compra tu vehículo con condiciones ventajosas',
      benefits: ['Hasta 96 meses', 'Entrada flexible', 'Cuotas adaptadas', 'Propiedad total'],
      monthlyFrom: '450€'
    }
  ];

  const maintenanceServices = [
    'Revisiones oficiales de marca',
    'Reparaciones especializadas',
    'Diagnosis computarizada',
    'Pintura y chapa premium',
    'Neumáticos y llantas',
    'Sistema de frenos',
    'Aire acondicionado',
    'Sistemas electrónicos'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Luxury%20car%20service%20center%20with%20premium%20vehicles%2C%20professional%20automotive%20maintenance%20facility%2C%20high-end%20car%20dealership%20service%20department%2C%20sophisticated%20workshop%20environment%2C%20modern%20automotive%20technology&width=1920&height=800&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Servicios <span className="text-gold-400">Premium</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experiencia completa en servicios automotrices de lujo. 
            Desde la venta hasta el mantenimiento, cuidamos cada detalle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-gold-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios premium para satisfacer todas tus necesidades automotrices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 group hover:border-gold-500">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gold-400 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <i className="ri-check-line text-gold-400 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                  onClick={() => navigate('/contacto')}
                >
                  Más Información
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Opciones de <span className="text-gold-400">Financiación</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexibilidad total para hacer realidad la compra de tu vehículo premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gold-500 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {option.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {option.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-3xl font-bold text-gold-400">
                    Desde {option.monthlyFrom}
                  </span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {option.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <i className="ri-check-line text-gold-400 mr-3"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                  onClick={() => navigate('/contacto')}
                >
                  Solicitar Información
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-24 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Taller <span className="text-gold-400">Especializado</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nuestro taller cuenta con la última tecnología y técnicos certificados 
                por las principales marcas de lujo para garantizar el máximo cuidado de tu vehículo.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <i className="ri-tools-line text-gold-400 mr-3"></i>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="primary" 
                  className="bg-gold-500 hover:bg-gold-600 text-black border-none"
                  onClick={() => navigate('/contacto')}
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Reservar Cita
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-400 text-gray-300 hover:bg-gray-600 hover:text-white"
                  onClick={() => window.open('tel:925123457', '_self')}
                >
                  <i className="ri-phone-line mr-2"></i>
                  Llamar Taller
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20luxury%20car%20service%20workshop%20with%20professional%20technicians%20working%20on%20premium%20vehicles%2C%20high-tech%20automotive%20equipment%2C%20clean%20organized%20garage%20environment%2C%20specialized%20car%20maintenance%20facility&width=600&height=500&seq=workshop&orientation=landscape"
                alt="Taller especializado"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-black p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm font-medium">Asistencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro <span className="text-gold-500">Proceso</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un proceso simple y transparente para tu tranquilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consulta',
                description: 'Contacta con nosotros y cuéntanos tus necesidades'
              },
              {
                step: '02',
                title: 'Asesoramiento',
                description: 'Nuestros expertos te ayudan a elegir la mejor opción'
              },
              {
                step: '03',
                title: 'Financiación',
                description: 'Te ofrecemos las mejores condiciones de financiación'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Recibe tu vehículo con toda la documentación'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gold-500 text-black rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Necesitas más <span className="text-gold-400">información</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Nuestro equipo de especialistas está listo para asesorarte 
            y ofrecerte el servicio que mejor se adapte a tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold"
              onClick={() => navigate('/contacto')}
            >
              <i className="ri-customer-service-2-line mr-2"></i>
              Contactar Asesor
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => navigate('/sobre-nosotros')}
            >
              <i className="ri-map-pin-line mr-2"></i>
              Visitar Instalaciones
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
