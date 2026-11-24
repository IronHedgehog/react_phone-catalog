import { Link } from 'react-router-dom';

import { Category } from '@shared/types';
import s from './CategoryCard.module.scss';

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  count: number;
  id: Category;
}

export const CategoryCard = ({
  title,
  image,
  href,
  count,
  id,
}: CategoryCardProps) => (
  <Link to={href} className={s.card}>
    <div className={s.imageWrapper} data-category={id}>
      <img src={image} alt="" className={s.image} loading="lazy" />
    </div>

    <h3 className={s.title}>{title}</h3>

    <p className={s.count}>{count} models</p>
  </Link>
);
