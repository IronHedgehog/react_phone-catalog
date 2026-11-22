import React, { memo } from 'react';
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { BannerInfo } from '@modules/HomePage/Hero/types/banners';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';
import styles from './HeroSlider.module.scss';

interface HeroSliderProps {
  banners: BannerInfo[];
}

const HeroSliderComponent: React.FC<HeroSliderProps> = ({ banners }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, A11y, Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      a11y={{
        prevSlideMessage: 'Previous banner',
        nextSlideMessage: 'Next banner',
        paginationBulletMessage: 'Go to banner {{index}}',
      }}
      breakpoints={{
        640: {
          spaceBetween: 24,
          slidesPerView: 1,
        },
      }}
      className={styles.swiperContainer}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={banner.id} className={styles.slideItem}>
          <Link
            to={banner.href}
            className={styles.imageLink}
            aria-label={`Browse ${banner.category}`}
          >
            <picture className={styles.bannerPicture}>
              <source media="(min-width: 640px)" srcSet={banner.desktopSrc} />

              <img
                src={banner.mobileSrc}
                alt=""
                loading={index === 0 ? 'eager' : 'lazy'}
                className={styles.bannerImage}
              />
            </picture>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const HeroSlider = memo(HeroSliderComponent);
