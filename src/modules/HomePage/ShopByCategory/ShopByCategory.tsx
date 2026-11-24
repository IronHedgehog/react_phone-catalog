import type { Category } from '@shared/types/Product';
import { useGetProductsQuery } from '@store/api/catalogApi';
import { useMemo } from 'react';
import { categories } from './categories';
import { CategoryCard } from './CategoryCard';

import { Container } from '@shared/components/Container';
import s from './ShopByCategory.module.scss';

export const ShopByCategory = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  const categoryCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      phones: 0,
      tablets: 0,
      accessories: 0,
    };

    for (const product of products ?? []) {
      counts[product.category] += 1;
    }

    return counts;
  }, [products]);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Failed to load products.</p>;
  }

  return (
    <section className={s.shopByCategory}>
      <Container>
        <h2 className={s.title}>Shop by category</h2>

        <ul className={s.categoryList}>
          {categories.map(category => (
            <li className={s.categoryItem} key={category.id}>
              <CategoryCard
                title={category.title}
                image={category.image}
                href={category.href}
                count={categoryCounts[category.id]}
                id={category.id}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
