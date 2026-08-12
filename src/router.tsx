import { createHashRouter, Navigate } from 'react-router-dom';
import { Layout, ErrorBoundary } from '@shared/components';
import { lazyImport } from '@shared/utils';

const HomePage = lazyImport(
  () => import('./modules/HomePage/HomePage'),
  'HomePage',
);
const ProductPage = lazyImport(
  () => import('./modules/ProductPage/ProductPage'),
  'ProductPage',
);
const ProductDetailsPage = lazyImport(
  () => import('./modules/ProductDetailsPage/ProductDetailsPage'),
  'ProductDetailsPage',
);
const CartPage = lazyImport(
  () => import('./modules/CartPage/CartPage'),
  'CartPage',
);
const FavouritesPage = lazyImport(
  () => import('./modules/FavouritesPage/FavouritesPage'),
  'FavouritesPage',
);
const NotFoundPage = lazyImport(
  () => import('./modules/NotFoundPage/NotFoundPage'),
  'NotFoundPage',
);

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <Navigate to="/" replace /> },

      {
        path: 'phones',
        children: [
          { index: true, element: <ProductPage /> },
          { path: ':productId', element: <ProductDetailsPage /> },
        ],
      },
      {
        path: 'tablets',
        children: [
          { index: true, element: <ProductPage /> },
          { path: ':productId', element: <ProductDetailsPage /> },
        ],
      },
      {
        path: 'accessories',
        children: [
          { index: true, element: <ProductPage /> },
          { path: ':productId', element: <ProductDetailsPage /> },
        ],
      },

      { path: 'favourites', element: <FavouritesPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
