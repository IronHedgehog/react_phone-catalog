import cn from 'classnames';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderActions.module.scss';

const actions = [
  { to: '/favourites', label: 'Favorites', icon: 'heart' },
  { to: '/cart', label: 'Shopping Cart', icon: 'cart' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }): string =>
  cn(styles.actionBlock, { [styles.isActive]: isActive });

export const HeaderActions = memo(() => {
  return (
    <div className={styles.actions}>
      <nav className={styles.desktopActions} aria-label="User Actions">
        <ul className={styles.actionsList}>
          {actions.map(action => (
            <li className={styles.actionItem} key={action.to}>
              <NavLink
                to={action.to}
                className={getLinkClass}
                aria-label={action.label}
              >
                <svg
                  className={styles[`${action.icon}Icon`]}
                  aria-hidden="true"
                >
                  <use
                    href={`${import.meta.env.BASE_URL}/img/sprite.svg#icon-${action.icon}`}
                  />
                </svg>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

HeaderActions.displayName = 'HeaderActions';
