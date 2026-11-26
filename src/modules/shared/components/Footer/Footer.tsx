import { Link } from 'react-router-dom';

import { Container } from '../Container';

import s from './Footer.module.scss';

export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.content}>
          <Link to="/" className={s.logoLink} aria-label="Home">
            <svg className={s.logo} viewBox="0 0 64 22" aria-hidden="true">
              <use href={`${import.meta.env.BASE_URL}img/logo.svg`} />
            </svg>
          </Link>

          <nav aria-label="Footer navigation">
            <ul className={s.navigation}>
              <li className={s.navigationItem}>
                <a
                  href="https://github.com/IronHedgehog/react_phone-catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.navigationLink}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IronHedgehog/react_phone-catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.navigationLink}
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IronHedgehog/react_phone-catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.navigationLink}
                >
                  Rights
                </a>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className={s.backToTop}
            onClick={handleBackToTop}
          >
            <span className={s.backToTopText}>Back to top</span>

            <span className={s.backToTopButton} aria-hidden="true">
              <svg className={s.backToTopIcon}>
                <use
                  href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-top`}
                />
              </svg>
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
};
