import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import styles from './Header.module.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(styles.navLink, { [styles.isActive]: isActive });

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container_height}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoLink}>
            <svg className={styles.logoIcon}>
              <use href={`${import.meta.env.BASE_URL}img/logo.svg`} />
            </svg>
          </Link>

          <nav className={styles.nav}>
            <NavLink to="/" className={getLinkClass}>
              home
            </NavLink>
            <NavLink to="/phones" className={getLinkClass}>
              phones
            </NavLink>
            <NavLink to="/tablets" className={getLinkClass}>
              tablets
            </NavLink>
            <NavLink to="/accessories" className={getLinkClass}>
              accessories
            </NavLink>
          </nav>

          <button className={styles.burgerMenu}>
            <svg className={styles.menuIcon}>
              <use
                href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-menu`}
              />
            </svg>
          </button>

          <div className={styles.actions}>
            <div className={styles.desktopActions}>
              <Link to="/favourites" className={styles.actionBlock}>
                <svg className={styles.heartIcon}>
                  <use
                    href={`${import.meta.env.BASE_URL}img/sprite.svg#heart`}
                  />
                </svg>
              </Link>
              <Link to="/cart" className={styles.actionBlock}>
                <svg className={styles.cartIcon}>
                  <use
                    href={`${import.meta.env.BASE_URL}img/sprite.svg#cart`}
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
