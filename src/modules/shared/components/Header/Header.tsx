import { useMatchMedia } from '@shared/hooks/useMatchMedia';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
import styles from './Header.module.scss';
import { HeaderActions } from './HeaderActions';
import { MenuOverlay } from './MenuOverlay';
import { NavBar } from './NavBar';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isTabletOrDesktop = useMatchMedia('(min-width: 640px)');

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isTabletOrDesktop && isMenuOpen) {
      handleCloseMenu();
    }
  }, [isTabletOrDesktop, isMenuOpen, handleCloseMenu]);

  return (
    <header className={styles.header}>
      <Container className={styles.container_height}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoLink}>
            <svg className={styles.logoIcon}>
              <use href={`${import.meta.env.BASE_URL}/img/logo.svg`} />
            </svg>
          </Link>

          <button
            className={styles.burgerMenu}
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <svg className={styles.menuIcon}>
              <use
                href={`${import.meta.env.BASE_URL}/img/sprite.svg#${isMenuOpen ? 'icon-close' : 'icon-menu'}`}
              />
            </svg>
          </button>
          <div className={styles.navWrapper}>
            <NavBar />
          </div>
          <div className={styles.actionWrapper}>
            <HeaderActions />
          </div>
        </div>
      </Container>
      <MenuOverlay isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
};
