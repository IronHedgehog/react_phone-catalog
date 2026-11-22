import { Product } from '@shared/types';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../ProductCard';

import styles from './ProductsSlider.module.scss';
interface ProductsSliderProps {
  products: Product[];
}

export const ProductsSlider: React.FC<ProductsSliderProps> = ({ products }) => {
  return (
    <Swiper slidesPerView="auto" spaceBetween={16} className={styles.slider}>
      {products.map(product => (
        <SwiperSlide key={product.id} className={styles.slide}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
