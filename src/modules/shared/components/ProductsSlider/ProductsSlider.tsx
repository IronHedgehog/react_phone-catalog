import { useRef, useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Product } from '@shared/types';
import { ProductCard } from '../ProductCard';

import styles from './ProductsSlider.module.scss';

interface ProductsSliderProps {
  title: string;
  products: Product[];
}

export const ProductsSlider: React.FC<ProductsSliderProps> = ({
  title,
  products,
}) => {
  const [navigation, setNavigation] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const swiperRef = useRef<SwiperType | null>(null);

  const updateNavigation = (swiper: SwiperType) => {
    setNavigation({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  return (
    <div className={styles.productsSlider}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.navigationButton}
            aria-label="Previous products"
            disabled={navigation.isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg className={styles.navigationIcon} aria-hidden="true">
              <use
                href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-left`}
              />
            </svg>
          </button>

          <button
            type="button"
            className={styles.navigationButton}
            aria-label="Next products"
            disabled={navigation.isEnd}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg className={styles.navigationIcon} aria-hidden="true">
              <use
                href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-right`}
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        className={styles.slider}
        onSwiper={swiper => {
          swiperRef.current = swiper;
          updateNavigation(swiper);
        }}
        onSlideChange={updateNavigation}
        onResize={updateNavigation}
        onUpdate={updateNavigation}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.slide}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
