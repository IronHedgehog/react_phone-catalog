/* eslint-disable @typescript-eslint/indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Category, Product, ProductDetails } from '@shared/types';

export interface ProductRequestArgs {
  category: Category;
  itemId: string;
}

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.BASE_URL}api/` }),
  endpoints: builder => ({
    getProductsByCategory: builder.query<Product[], Category>({
      query: () => 'products.json',
      transformResponse: (response: Product[], meta, arg) =>
        response.filter(product => product.category === arg),
    }),

    getProductDetails: builder.query<
      ProductDetails | undefined,
      ProductRequestArgs
    >({
      query: arg => `${arg.category}.json`,
      transformResponse: (response: ProductDetails[], meta, arg) =>
        response.find(item => item.id === arg.itemId),
    }),
  }),
});

export const { useGetProductsByCategoryQuery, useGetProductDetailsQuery } =
  catalogApi;
