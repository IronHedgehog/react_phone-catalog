import type { SelectOption } from '@shared/components/Select/Select';

export type PerPage = '4' | '8' | '16' | 'all';

export const PER_PAGE_OPTIONS: readonly SelectOption<PerPage>[] = [
  { label: '4', value: '4' },
  { label: '8', value: '8' },
  { label: '16', value: '16' },
  { label: 'All', value: 'all' },
];
