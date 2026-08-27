import cn from 'classnames';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderActions } from '../HeaderActions';
import { NavBar } from '../NavBar/NavBar';
import styles from './MenuOverlay.module.scss';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <aside
      className={cn(styles.overlay, { [styles.isOpen]: isOpen })}
      aria-hidden={!isOpen}
    >
      <div className={styles.navWrapper}>
        <NavBar />
      </div>

      <div className={styles.actionsGrid}>
        <HeaderActions />
      </div>
    </aside>
  );
};
