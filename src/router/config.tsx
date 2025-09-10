
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Inventario from '../pages/inventario/page';
import Servicios from '../pages/servicios/page';
import SobreNosotros from '../pages/sobre-nosotros/page';
import Blog from '../pages/blog/page';
import Contacto from '../pages/contacto/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/inventario',
    element: <Inventario />
  },
  {
    path: '/servicios',
    element: <Servicios />
  },
  {
    path: '/sobre-nosotros',
    element: <SobreNosotros />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
