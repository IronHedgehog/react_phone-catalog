import type { Product } from '@shared/types';
import type { SortBy } from '../constants/sortOptions';

export const sortProducts = (
  products: readonly Product[],
  sortBy: SortBy,
): Product[] => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'age':
      return sortedProducts.sort((a, b) => b.year - a.year);

    case 'title':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

    case 'price':
      return sortedProducts.sort((a, b) => a.price - b.price);
  }
};
