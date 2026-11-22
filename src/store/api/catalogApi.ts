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
    getProducts: builder.query<Product[], void>({
      query: () => 'products.json',
    }),

    getProductsByCategory: builder.query<Product[], Category>({
      query: () => 'products.json',
      transformResponse: (response: Product[], _meta, arg) =>
        response.filter(product => product.category === arg),
    }),

    getProductDetails: builder.query<
      ProductDetails | undefined,
      ProductRequestArgs
    >({
      query: arg => `${arg.category}.json`,
      transformResponse: (response: ProductDetails[], _meta, arg) =>
        response.find(item => item.id === arg.itemId),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductDetailsQuery,
} = catalogApi;
