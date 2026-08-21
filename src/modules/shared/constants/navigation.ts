export interface NavigationRoute {
  path: string;
  label: string;
}

export const NAVIGATION_ROUTES: NavigationRoute[] = [
  { path: '/', label: 'home' },
  { path: '/phones', label: 'phones' },
  { path: '/tablets', label: 'tablets' },
  { path: '/accessories', label: 'accessories' },
];
