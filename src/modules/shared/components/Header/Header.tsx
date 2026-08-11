import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          Logo
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/phones" className={styles.navLink}>
            Phones
          </NavLink>
          <NavLink to="/tablets" className={styles.navLink}>
            Tablets
          </NavLink>
          <NavLink to="/accessories" className={styles.navLink}>
            Accessories
          </NavLink>
        </nav>
        <div className={styles.actions}>
          <Link to="/favorites" className={styles.actionLink}>
            Favs
          </Link>
          <Link to="/cart" className={styles.actionLink}>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};
