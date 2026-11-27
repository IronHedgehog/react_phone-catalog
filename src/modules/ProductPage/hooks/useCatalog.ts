import { skipToken } from '@reduxjs/toolkit/query';
import { useSearchParams } from 'react-router-dom';

import { isValidCategory } from '@shared/constants/categories';
import { useGetProductsByCategoryQuery } from '@store/api/catalogApi';

import { PER_PAGE_OPTIONS, type PerPage } from '../constants/perPageOptions';
import { SORT_OPTIONS, type SortBy } from '../constants/sortOptions';
import { sortProducts } from '../utils/sortProducts';

export const useCatalog = (category: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { currentData, isLoading, isFetching, isError, refetch } =
    useGetProductsByCategoryQuery(
      isValidCategory(category) ? category : skipToken,
    );

  const products = currentData ?? [];

  const sortBy =
    SORT_OPTIONS.find(option => option.value === searchParams.get('sort'))
      ?.value ?? 'age';

  const handleSortChange = (value: SortBy) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);

      params.set('sort', value);
      params.delete('page');

      return params;
    });
  };

  const perPage =
    PER_PAGE_OPTIONS.find(
      option => option.value === searchParams.get('perPage'),
    )?.value ?? 'all';

  const handlePerPageChange = (value: PerPage) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);

      if (value === 'all') {
        params.delete('perPage');
      } else {
        params.set('perPage', value);
      }

      params.delete('page');

      return params;
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);

      if (page === 1) {
        params.delete('page');
      } else {
        params.set('page', String(page));
      }

      return params;
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const itemsPerPage =
    perPage === 'all' ? Math.max(products.length, 1) : Number(perPage);

  const totalPages = Math.max(Math.ceil(products.length / itemsPerPage), 1);

  const page = Number(searchParams.get('page') ?? '1');

  const currentPage = Number.isInteger(page)
    ? Math.min(Math.max(page, 1), totalPages)
    : 1;

  const sortedProducts = sortProducts(products, sortBy);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const visibleProducts = sortedProducts.slice(start, end);

  return {
    products: visibleProducts,
    totalCount: products.length,
    sortBy,
    perPage,
    currentPage,
    totalPages,
    handleSortChange,
    handlePerPageChange,
    handlePageChange,
    isLoading: isLoading || (isFetching && !currentData),
    isError,
    refetch,
  };
};
