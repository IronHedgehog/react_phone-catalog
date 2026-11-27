import type { SelectOption } from '@shared/components/Select/Select';

export type SortBy = 'age' | 'title' | 'price';

export const SORT_OPTIONS: readonly SelectOption<SortBy>[] = [
  { label: 'Newest', value: 'age' },
  { label: 'Alphabetically', value: 'title' },
  { label: 'Cheapest', value: 'price' },
];
