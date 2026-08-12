export const CATEGORY_CONFIG = {
  phones: { id: 'phones', title: 'phones' },
  tablets: { id: 'tablets', title: 'tablets' },
  accessories: { id: 'accessories', title: 'accessories' },
} as const;

export type CategoryKey = keyof typeof CATEGORY_CONFIG;

export const isValidCategory = (key: string): key is CategoryKey => {
  return key in CATEGORY_CONFIG;
};
