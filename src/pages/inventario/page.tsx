
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuel: string;
  transmission: string;
  category: string;
  image: string;
  featured: boolean;
}

export default function Inventario() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');

  const vehicles: Vehicle[] = [
    {
      id: 1,
      brand: 'Mercedes-Benz',
      model: 'S-Class 400d',
      year: 2024,
      price: 89900,
      mileage: '2.500 km',
      fuel: 'Híbrido',
      transmission: 'Automático',
      category: 'Sedán',
      image: 'Luxury Mercedes-Benz S-Class premium sedan in elegant showroom lighting, sophisticated black finish, professional automotive photography, premium vehicle display, high-end car dealership presentation',
      featured: true
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X7 M50i',
      year: 2023,
      price: 95500,
      mileage: '8.500 km',
      fuel: 'Gasolina',
      transmission: 'Automático',
      category: 'SUV',
      image: 'Premium BMW X7 luxury SUV in showroom, sophisticated silver finish, professional automotive photography, high-end vehicle display, elegant presentation',
      featured: true
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'RS6 Avant',
      year: 2024,
      price: 125750,
      mileage: '1.200 km',
      fuel: 'Gasolina',
      transmission: 'Automático',
      category: 'Familiar',
      image: 'Luxury Audi RS6 Avant premium station wagon, sleek dark gray finish, professional automotive photography, high-end car dealership display',
      featured: true
    },
    {
      id: 4,
      brand: 'Porsche',
      model: '911 Carrera S',
      year: 2023,
      price: 145000,
      mileage: '5.800 km',
      fuel: 'Gasolina',
      transmission: 'Automático',
      category: 'Deportivo',
      image: 'Premium Porsche 911 sports car in luxury showroom, elegant black finish, professional automotive photography, high-end vehicle presentation',
      featured: false
    },
    {
      id: 5,
      brand: 'Lexus',
      model: 'LS 500h',
      year: 2023,
      price: 78900,
      mileage: '12.000 km',
      fuel: 'Híbrido',
      transmission: 'Automático',
      category: 'Sedán',
      image: 'Luxury Lexus LS sedan in premium showroom lighting, sophisticated white finish, professional automotive photography, high-end display',
      featured: false
    },
    {
      id: 6,
      brand: 'Tesla',
      model: 'Model S Plaid',
      year: 2024,
      price: 132000,
      mileage: '800 km',
      fuel: 'Eléctrico',
      transmission: 'Automático',
      category: 'Sedán',
      image: 'Premium Tesla Model S electric luxury sedan, sleek black finish, modern automotive photography, high-end electric vehicle display',
      featured: false
    }
  ];

  const brands = ['Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Lexus', 'Tesla'];
  const years = [2024, 2023, 2022, 2021];
  const categories = ['Sedán', 'SUV', 'Deportivo', 'Familiar'];
  const priceRanges = [
    { label: 'Hasta 50.000€', value: '0-50000' },
    { label: '50.000€ - 100.000€', value: '50000-100000' },
    { label: '100.000€ - 150.000€', value: '100000-150000' },
    { label: 'Más de 150.000€', value: '150000+' }
  ];

  const sortOptions = [
    { label: 'Precio: menor a mayor', value: 'price-asc' },
    { label: 'Precio: mayor a menor', value: 'price-desc' },
    { label: 'Año: más reciente', value: 'year-desc' },
    { label: 'Kilómetros: menor a mayor', value: 'mileage-asc' }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || vehicle.brand === selectedBrand;
    const matchesYear = !selectedYear || vehicle.year.toString() === selectedYear;
    const matchesCategory = !selectedCategory || vehicle.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      if (max) {
        matchesPrice = vehicle.price >= parseInt(min) && vehicle.price <= parseInt(max);
      } else {
        matchesPrice = vehicle.price >= parseInt(min);
      }
    }

    return matchesSearch && matchesBrand && matchesYear && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'year-desc':
        return b.year - a.year;
      case 'mileage-asc':
        return parseInt(a.mileage) - parseInt(b.mileage);
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedYear('');
    setPriceRange('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Inventario <span className="text-gold-400">Premium</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora nuestra exclusiva colección de vehículos de lujo y alta gama. 
            Filtra por marca, precio, año y encuentra tu vehículo ideal.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-600 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">Filtros</h3>
                <button
                  onClick={clearFilters}
                  className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors duration-200"
                >
                  Limpiar
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Buscar
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Marca o modelo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white placeholder-gray-400"
                  />
                  <i className="ri-search-line absolute right-3 top-2.5 text-gray-400"></i>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Marca
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white pr-8"
                >
                  <option value="">Todas las marcas</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Año
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white pr-8"
                >
                  <option value="">Todos los años</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categoría
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white pr-8"
                >
                  <option value="">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm text-white pr-8"
                >
                  <option value="">Todos los precios</option>
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-4 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-lg border border-gold-500/20">
                <h4 className="text-white font-semibold mb-2">¿Necesitas ayuda?</h4>
                <p className="text-gray-300 text-sm mb-3">Contacta con nuestros expertos</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                  onClick={() => navigate('/contacto')}
                >
                  <i className="ri-phone-line mr-2"></i>
                  Contactar
                </Button>
              </div>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-gray-700">
                Mostrando <span className="font-semibold">{filteredVehicles.length}</span> de <span className="font-semibold">{vehicles.length}</span> vehículos
              </p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white pr-8"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-gray-800 rounded-2xl shadow-lg border border-gray-600 hover:shadow-xl hover:border-gold-500 transition-all duration-300 group overflow-hidden">
                  <div className="relative">
                    <img
                      src={`https://readdy.ai/api/search-image?query=$%7Bvehicle.image%7D&width=400&height=250&seq=inventory-${vehicle.id}&orientation=landscape`}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {vehicle.featured && (
                      <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Destacado
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {vehicle.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <i className="ri-calendar-line mr-2 text-gold-400"></i>
                        {vehicle.year}
                      </div>
                      <div className="flex items-center">
                        <i className="ri-roadster-line mr-2 text-gold-400"></i>
                        {vehicle.mileage}
                      </div>
                      <div className="flex items-center">
                        <i className="ri-gas-station-line mr-2 text-gold-400"></i>
                        {vehicle.fuel}
                      </div>
                      <div className="flex items-center">
                        <i className="ri-settings-3-line mr-2 text-gold-400"></i>
                        {vehicle.transmission}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gold-400">
                        {vehicle.price.toLocaleString()}€
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                        onClick={() => navigate('/contacto')}
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-16 bg-gray-800 rounded-2xl">
                <i className="ri-car-line text-6xl text-gray-500 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No se encontraron vehículos
                </h3>
                <p className="text-gray-400 mb-6">
                  Intenta ajustar los filtros para ver más resultados
                </p>
                <Button
                  variant="outline"
                  className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                  onClick={clearFilters}
                >
                  <i className="ri-refresh-line mr-2"></i>
                  Limpiar Filtros
                </Button>
              </div>
            )}

            {/* Call to Action */}
            {filteredVehicles.length > 0 && (
              <div className="mt-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¿No encuentras lo que buscas?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nuestro equipo puede ayudarte a encontrar el vehículo perfecto
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="primary" 
                    className="bg-gold-500 hover:bg-gold-600 text-black"
                    onClick={() => navigate('/contacto')}
                  >
                    <i className="ri-customer-service-2-line mr-2"></i>
                    Contactar Asesor
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                    onClick={() => window.open('https://wa.me/34640118692?text=Hola, estoy buscando un vehículo específico. ¿Pueden ayudarme?', '_blank')}
                  >
                    <i className="ri-whatsapp-line mr-2"></i>
                    WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
