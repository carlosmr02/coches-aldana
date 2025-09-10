
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Header from './components/feature/Header';
import Footer from './components/feature/Footer';
import WhatsAppButton from './components/feature/WhatsAppButton';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
