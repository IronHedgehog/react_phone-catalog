import { useMemo } from 'react';

import { Container } from '@shared/components/Container';
import { ProductsSlider } from '@shared/components/ProductsSlider';
import { useGetProductsQuery } from '@store/api/catalogApi';

import s from './HotPrices.module.scss';

export const HotPrices = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  const hotProducts = useMemo(() => {
    if (!products) {
      return [];
    }

    return products
      .filter(product => product.fullPrice > product.price)
      .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));
  }, [products]);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Failed to load products.</p>;
  }

  return (
    <section className={s.section}>
      <Container>
        <ProductsSlider
          title="Hot prices"
          products={hotProducts}
          showDiscount
        />
      </Container>
    </section>
  );
};
