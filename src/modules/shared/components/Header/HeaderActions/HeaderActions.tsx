import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderActions.module.scss';

const actions = [
  { to: '/favourites', label: 'Favorites', icon: 'heart' },
  { to: '/cart', label: 'Shopping Cart', icon: 'cart' },
];

export const HeaderActions = memo(() => {
  return (
    <div className={styles.actions}>
      <nav className={styles.desktopActions} aria-label="User Actions">
        <ul className={styles.actionsList}>
          {actions.map(action => (
            <li className={styles.actionItem} key={action.to}>
              <Link
                to={action.to}
                className={styles.actionBlock}
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
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

HeaderActions.displayName = 'HeaderActions';
