import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '@/pages/layout';
import SearchPage, { searchPageLoader } from '@/pages/search';
import CartPage from '@/pages/cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/search" replace />,
      },
      {
        path: '/search',
        loader: searchPageLoader,
        element: <SearchPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
