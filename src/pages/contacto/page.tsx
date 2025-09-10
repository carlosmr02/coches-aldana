
import { useState } from 'react';
import Button from '../../components/base/Button';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d2vbj6ba9ovua8gnnd9g', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Dirección',
      details: ['Av. de Madrid, 45', '45600 Talavera de la Reina', 'Toledo, España']
    },
    {
      icon: 'ri-phone-line',
      title: 'Teléfonos',
      details: ['Ventas: 925 123 456', 'Taller: 925 123 457', 'WhatsApp: 640 118 692']
    },
    {
      icon: 'ri-mail-line',
      title: 'Correos',
      details: ['info@aldanaautopremium.com', 'ventas@aldanaautopremium.com', 'taller@aldanaautopremium.com']
    },
    {
      icon: 'ri-time-line',
      title: 'Horarios',
      details: ['Lun - Vie: 9:00 - 19:00', 'Sábados: 9:00 - 14:00', 'Domingos: Cerrado']
    }
  ];

  const departments = [
    { value: 'ventas', label: 'Ventas' },
    { value: 'taller', label: 'Taller y Mantenimiento' },
    { value: 'financiacion', label: 'Financiación' },
    { value: 'tasacion', label: 'Tasación' },
    { value: 'seguros', label: 'Seguros' },
    { value: 'general', label: 'Información General' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold-400">Contacta</span> con Nosotros
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de expertos 
            y descubre cómo podemos hacer realidad tu próxima experiencia premium.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-600">
              <h2 className="text-3xl font-bold text-white mb-8">
                Envíanos un <span className="text-gold-500">Mensaje</span>
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-400 text-xl mr-3"></i>
                    <p className="text-green-300">¡Mensaje enviado correctamente! Te contactaremos pronto.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-400 text-xl mr-3"></i>
                    <p className="text-red-300">Error al enviar el mensaje. Por favor, inténtalo nuevamente.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contacto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                      placeholder="640 118 692"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Departamento
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white pr-8"
                    >
                      <option value="">Selecciona un departamento</option>
                      {departments.map(dept => (
                        <option key={dept.value} value={dept.value}>{dept.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm resize-none text-white placeholder-gray-400"
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {formData.message.length}/500 caracteres
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-3"
                  />
                  <label className="text-sm text-gray-300">
                    Acepto la <a href="#" className="text-gold-500 hover:underline">política de privacidad</a> y 
                    el tratamiento de mis datos personales para responder a mi consulta.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-600">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gold-400 rounded-lg flex-shrink-0">
                    <i className={`${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white border-none"
                onClick={() => window.open('https://wa.me/34640118692?text=Hola, me interesa obtener información sobre sus vehículos premium. ¿Podrían ayudarme?', '_blank')}
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp: 640 118 692
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                onClick={() => window.open('tel:925123456', '_self')}
              >
                <i className="ri-phone-line mr-2"></i>
                Llamar: 925 123 456
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra <span className="text-gold-500">Ubicación</span>
            </h2>
            <p className="text-lg text-gray-700">
              Encuéntranos en el corazón de Talavera de la Reina
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-600">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8956147515!2d-4.830392384567891!3d39.96347939415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4127c85c7b68e7%3A0x6b3d0d8c8f5a1c8!2sAv.%20de%20Madrid%2C%2045%2C%2045600%20Talavera%20de%20la%20Reina%2C%20Toledo%2C%20Spain!5e0!3m2!1sen!2ses!4v1692345678901!5m2!1sen!2ses"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aldana Autopremium - Ubicación"
                className="w-full h-96"
              />
            </div>
            
            <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2 text-gold-400">
                    Dirección
                  </h3>
                  <p className="text-gray-300">
                    Av. de Madrid, 45<br />
                    45600 Talavera de la Reina<br />
                    Toledo, España
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gold-400">
                    Horario
                  </h3>
                  <p className="text-gray-300">
                    Lun - Vie: 9:00 - 19:00<br />
                    Sábados: 9:00 - 14:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
                
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-semibold mb-2 text-gold-400">
                    Parking
                  </h3>
                  <p className="text-gray-300">
                    Aparcamiento gratuito<br />
                    para clientes<br />
                    Fácil acceso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preguntas <span className="text-gold-500">Frecuentes</span>
            </h2>
            <p className="text-lg text-gray-300">
              Resolvemos las dudas más comunes de nuestros clientes
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: '¿Qué garantía tienen los vehículos?',
                answer: 'Todos nuestros vehículos incluyen garantía oficial de fábrica. Los vehículos seminuevos tienen garantía extendida de hasta 24 meses.'
              },
              {
                question: '¿Ofrecen financiación?',
                answer: 'Sí, trabajamos con las mejores entidades financieras para ofrecer condiciones ventajosas adaptadas a cada cliente, incluyendo renting y leasing.'
              },
              {
                question: '¿Hacen tasaciones?',
                answer: 'Realizamos tasaciones gratuitas y profesionales de tu vehículo actual para optimizar tu inversión en el nuevo vehículo.'
              },
              {
                question: '¿El taller atiende todas las marcas?',
                answer: 'Nuestro taller especializado atiende principalmente las marcas premium que comercializamos, con técnicos certificados y piezas originales.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
