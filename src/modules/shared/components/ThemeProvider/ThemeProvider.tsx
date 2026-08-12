import { useAppSelector } from '@store/hooks';
import { selectThemeMode } from '@store/selectors/themeSelectors';
import { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const currentTheme = useAppSelector(selectThemeMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return <>{children}</>;
};
