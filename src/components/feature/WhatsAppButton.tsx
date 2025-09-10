
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const phoneNumber = '34640118692'; // Spanish format
    const message = encodeURIComponent('Hola, me interesa obtener información sobre sus vehículos premium. ¿Podrían ayudarme?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          ¡Chatea con nosotros!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors duration-200"
        aria-label="Cerrar"
      >
        ×
      </button>
    </div>
  );
}
