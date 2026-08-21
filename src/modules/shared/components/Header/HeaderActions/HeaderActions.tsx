import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderActions.module.scss';

export const HeaderActions = memo(() => {
  return (
    <div className={styles.actions}>
      <nav className={styles.desktopActions} aria-label="User Actions">
        <Link
          to="/favourites"
          className={styles.actionBlock}
          aria-label="Favorites"
        >
          <svg className={styles.heartIcon} aria-hidden="true">
            <use href={`${import.meta.env.BASE_URL}img/sprite.svg#heart`} />
          </svg>
        </Link>
        <Link
          to="/cart"
          className={styles.actionBlock}
          aria-label="Shopping Cart"
        >
          <svg className={styles.cartIcon} aria-hidden="true">
            <use href={`${import.meta.env.BASE_URL}img/sprite.svg#cart`} />
          </svg>
        </Link>
      </nav>
    </div>
  );
});

HeaderActions.displayName = 'HeaderActions';
