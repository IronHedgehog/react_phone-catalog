import { NAVIGATION_ROUTES } from '@shared/constants/navigation';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }): string =>
  cn(styles.navLink, { [styles.isActive]: isActive });

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {NAVIGATION_ROUTES.map(({ path, label }) => (
          <li key={path} className={styles.navItem}>
            <NavLink to={path} className={getLinkClass}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
