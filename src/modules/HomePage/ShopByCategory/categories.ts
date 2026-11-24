import type { Category } from '@shared/types';

interface CategoryConfig {
  id: Category;
  title: string;
  image: string;
  href: string;
}

export const categories: CategoryConfig[] = [
  {
    id: 'phones',
    title: 'Mobile phones',
    image: `${import.meta.env.BASE_URL}img/category-phones.webp`,
    href: '/phones',
  },
  {
    id: 'tablets',
    title: 'Tablets',
    image: `${import.meta.env.BASE_URL}img/category-tablets.png`,
    href: '/tablets',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: `${import.meta.env.BASE_URL}img/category-accessories.png`,
    href: '/accessories',
  },
];
