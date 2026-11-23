import { useMemo } from 'react';

import { Container } from '@shared/components/Container';
import { ProductsSlider } from '@shared/components/ProductsSlider';
import { useGetProductsQuery } from '@store/api/catalogApi';

import styles from './BrandNewModels.module.scss';

export const BrandNewModels = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  const newestProducts = useMemo(() => {
    if (!products) {
      return [];
    }

    return [...products].sort((a, b) => b.year - a.year);
  }, [products]);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Failed to load products.</p>;
  }

  return (
    <section className={styles.section}>
      <Container>
        <ProductsSlider title="Brand new models" products={newestProducts} />
      </Container>
    </section>
  );
};
