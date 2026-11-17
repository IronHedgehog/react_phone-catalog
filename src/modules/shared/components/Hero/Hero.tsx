import { Container } from '../Container';
import styles from './Hero.module.scss';
import { HeroSlider } from './HeroSlider';
import type { BannerInfo } from './types/banners';

const base = import.meta.env.BASE_URL;

const banners: BannerInfo[] = [
  {
    id: '1',
    href: '/phones',
    category: 'phones',
    mobileSrc: `${base}img/banner-phones-mobile.webp`,
    desktopSrc: `${base}img/banner-phones-desktop.webp`,
  },
  {
    id: '2',
    href: '/accessories',
    category: 'accessories',
    mobileSrc: `${base}img/banner-accessories-mobile.webp`,
    desktopSrc: `${base}img/banner-accessories-desktop.webp`,
  },
  {
    id: '3',
    href: '/tablets',
    category: 'tablets',
    mobileSrc: `${base}img/banner-tablets-mobile.webp`,
    desktopSrc: `${base}img/banner-tablets-desktop.webp`,
  },
];

export const Hero = () => {
  return (
    <section className={styles.heroSection} aria-label="Featured Gadgets">
      <Container>
        <h1 className={'visuallyHidden'}>Product Catalog</h1>
        <h2 className={styles.heroTitle}>Welcome to Nice Gadgets store!</h2>
      </Container>

      <div className={styles.sliderContainer}>
        <HeroSlider banners={banners} />
      </div>
    </section>
  );
};
