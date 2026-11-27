import { Link } from 'react-router-dom';

import s from './Breadcrumbs.module.scss';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={s.breadcrumbs} aria-label="Breadcrumb">
      <ol className={s.list}>
        <li className={s.item}>
          <Link to="/" aria-label="Home" className={s.link}>
            <svg className={s.homeIcon} aria-hidden="true">
              <use
                href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-home`}
              />
            </svg>
          </Link>
        </li>

        {items.map(item => (
          <li key={item.label} className={s.item}>
            <svg className={s.separator} aria-hidden="true">
              <use
                href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-right`}
              />
            </svg>

            {item.href ? (
              <Link to={item.href} className={s.link}>
                {item.label}
              </Link>
            ) : (
              <span className={s.current} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
