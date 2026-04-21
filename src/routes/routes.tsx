import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Home } from '../pages/Home';
import { Planes } from '../pages/Planes';
import { Clases } from '../pages/Clases';
import { Instalaciones } from '../pages/Instalaciones';
import { Contacto } from '../pages/Contacto';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'planes',
        element: <Planes />,
      },
      {
        path: 'clases',
        element: <Clases />,
      },
      {
        path: 'instalaciones',
        element: <Instalaciones />,
      },
      {
        path: 'contacto',
        element: <Contacto />,
      },
    ],
  },
]);
