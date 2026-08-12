import { CATEGORY_CONFIG, isValidCategory } from '@shared/constants/categories';
import { Navigate, useLocation } from 'react-router-dom';

export const ProductPage = () => {
  const { pathname } = useLocation();
  const category = pathname.replace('/', '');

  if (!isValidCategory(category)) {
    return <Navigate to="/404" replace />;
  }

  const { title } = CATEGORY_CONFIG[category];

  return (
    <div>
      <h1 className="visually-hidden">{title} page</h1>
      <p>Here will be the list of {category}</p>
    </div>
  );
};
