
import { useState } from 'react';
import Button from '../../components/base/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    setNewsletterStatus('idle');

    if (!newsletterEmail || newsletterEmail.length > 500) {
      setNewsletterStatus('error');
      setIsSubmittingNewsletter(false);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append('email', newsletterEmail);

      const response = await fetch('https://readdy.ai/api/form/d2vbj6ba9ovua8gnnda0', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      setNewsletterStatus('error');
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Tendencias en Vehículos Premium 2024: Tecnología y Sostenibilidad',
      excerpt: 'Descubre las últimas innovaciones en el sector automotriz de lujo, desde la hibridación avanzada hasta los sistemas de conducción autónoma.',
      category: 'Tendencias',
      date: '15 Dic 2024',
      readTime: '5 min',
      image: 'Latest luxury car technology dashboard and interior, premium automotive innovation, sophisticated high-tech vehicle cockpit, modern car technology display',
      featured: true
    },
    {
      id: 2,
      title: 'Mantenimiento Premium: Cómo Cuidar tu Vehículo de Lujo',
      excerpt: 'Guía completa para mantener tu vehículo premium en perfectas condiciones y preservar su valor a lo largo del tiempo.',
      category: 'Mantenimiento',
      date: '10 Dic 2024',
      readTime: '7 min',
      image: 'Professional luxury car maintenance in premium service center, high-end automotive care, specialist technician working on luxury vehicle',
      featured: true
    },
    {
      id: 3,
      title: 'Financiación Inteligente: Opciones para tu Próximo Vehículo Premium',
      excerpt: 'Análisis detallado de las mejores opciones de financiación para la adquisición de vehículos de lujo en 2024.',
      category: 'Financiación',
      date: '5 Dic 2024',
      readTime: '6 min',
      image: 'Professional automotive financing consultation in luxury dealership, financial advisor meeting with client, premium car sales process',
      featured: false
    },
    {
      id: 4,
      title: 'Mercedes-Benz vs BMW vs Audi: Comparativa de Sedanes Premium',
      excerpt: 'Análisis exhaustivo de los sedanes de lujo más destacados del mercado: características, rendimiento y valor.',
      category: 'Comparativas',
      date: '28 Nov 2024',
      readTime: '10 min',
      image: 'Luxury sedan comparison display in premium showroom, Mercedes BMW Audi side by side, high-end car comparison presentation',
      featured: false
    },
    {
      id: 5,
      title: 'Electrificación Premium: El Futuro de los Vehículos de Lujo',
      excerpt: 'Exploramos cómo las marcas premium están liderando la transición hacia la movilidad eléctrica sin comprometer el lujo.',
      category: 'Tecnología',
      date: '20 Nov 2024',
      readTime: '8 min',
      image: 'Premium electric luxury vehicles in modern showroom, high-end electric cars, sophisticated EV display, luxury electric automotive',
      featured: false
    },
    {
      id: 6,
      title: 'Guía de Compra: Qué Considerar al Elegir tu Primer Vehículo Premium',
      excerpt: 'Consejos esenciales para tomar la mejor decisión en la compra de tu primer vehículo de lujo.',
      category: 'Guías',
      date: '15 Nov 2024',
      readTime: '9 min',
      image: 'Customer consulting with automotive expert in luxury dealership, professional car buying guidance, premium vehicle selection process',
      featured: false
    }
  ];

  const categories = ['Todos', 'Tendencias', 'Mantenimiento', 'Financiación', 'Comparativas', 'Tecnología', 'Guías'];
  
  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog <span className="text-gold-400">Autopremium</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias, consejos y novedades 
            del mundo del automóvil premium
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Artículos <span className="text-gold-500">Destacados</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-600">
                <div className="relative">
                  <img
                    src={`https://readdy.ai/api/search-image?query=$%7Bpost.image%7D&width=600&height=300&seq=blog-featured-${post.id}&orientation=landscape`}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Destacado
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <i className="ri-calendar-line mr-2"></i>
                    {post.date}
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-2"></i>
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                    onClick={() => {
                      // Simular navegación al artículo completo
                      console.log(`Navegando al artículo: ${post.title}`);
                    }}
                  >
                    Leer Más
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gold-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gold-500 hover:text-black border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'Todos' ? 'Todos los' : selectedCategory} <span className="text-gold-500">Artículos</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-600">
                <div className="relative">
                  <img
                    src={`https://readdy.ai/api/search-image?query=$%7Bpost.image%7D&width=400&height=200&seq=blog-${post.id}&orientation=landscape`}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 left-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-400 mb-3">
                    <i className="ri-calendar-line mr-1"></i>
                    {post.date}
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-1"></i>
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                    onClick={() => {
                      // Simular navegación al artículo completo
                      console.log(`Navegando al artículo: ${post.title}`);
                    }}
                  >
                    Leer Artículo
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-file-text-line text-6xl text-gray-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay artículos en esta categoría
              </h3>
              <p className="text-gray-600">
                Selecciona otra categoría para ver más contenido
              </p>
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Suscríbete a nuestro <span className="text-gold-400">Newsletter</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Recibe las últimas novedades, consejos exclusivos y ofertas especiales 
            directamente en tu correo electrónico
          </p>
          
          {newsletterStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center">
                <i className="ri-check-circle-line text-green-400 text-xl mr-3"></i>
                <p className="text-green-300">¡Suscripción exitosa! Gracias por unirte.</p>
              </div>
            </div>
          )}

          {newsletterStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center">
                <i className="ri-error-warning-line text-red-400 text-xl mr-3"></i>
                <p className="text-red-300">Error en la suscripción. Inténtalo nuevamente.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4" data-readdy-form id="newsletter">
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              maxLength={500}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-gold-500 text-sm"
              required
            />
            <Button 
              variant="primary" 
              className="bg-gold-500 hover:bg-gold-600 text-black border-none px-6"
              disabled={isSubmittingNewsletter}
              type="submit"
            >
              {isSubmittingNewsletter ? 'Enviando...' : 'Suscribirse'}
            </Button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            No spam. Puedes darte de baja en cualquier momento.
          </p>
        </section>
      </div>
    </div>
  );
}
