import { ProductCard } from '@shared/components/ProductCard';
import type { Product } from '@shared/types';

import s from './ProductsList.module.scss';

interface ProductsListProps {
  products: readonly Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className={s.productsList}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          showDiscount={product.fullPrice > product.price}
        />
      ))}
    </div>
  );
};
