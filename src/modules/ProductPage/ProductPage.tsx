import { Navigate, useLocation } from 'react-router-dom';

import { Breadcrumbs } from '@shared/components/Breadcrumbs';
import { Container } from '@shared/components/Container';
import { ProductsList } from '@shared/components/ProductsList';
import { Select } from '@shared/components/Select';
import { CATEGORY_CONFIG, isValidCategory } from '@shared/constants/categories';

import { SORT_OPTIONS, type SortBy } from './constants/sortOptions';
import { useCatalog } from './hooks/useCatalog';

import { Loader } from '@shared/components';
import { Pagination } from '@shared/components/Pagination';
import s from './ProductPage.module.scss';
import { PER_PAGE_OPTIONS, PerPage } from './constants/perPageOptions';

export const ProductPage = () => {
  const { pathname } = useLocation();
  const category = pathname.replace('/', '');

  const {
    products,
    isLoading,
    isError,
    refetch,
    totalCount,
    sortBy,
    perPage,
    currentPage,
    totalPages,
    handlePageChange,
    handlePerPageChange,
    handleSortChange,
  } = useCatalog(category);

  if (!isValidCategory(category)) {
    return <Navigate to="/404" replace />;
  }

  const { title } = CATEGORY_CONFIG[category];

  return (
    <Container>
      <div className={s.breadcrumbsWrapper}>
        <Breadcrumbs items={[{ label: title }]} />
      </div>

      <section className={s.products}>
        <h1 className={s.productTitle}>{title} page</h1>
        {isLoading && <Loader />}

        {!isLoading && isError && (
          <div role="alert">
            <p>Something went wrong</p>

            <button type="button" onClick={() => refetch()}>
              Reload
            </button>
          </div>
        )}

        {!isLoading && !isError && totalCount === 0 && (
          <p>There are no {category} yet</p>
        )}
        {!isLoading && !isError && totalCount > 0 && (
          <>
            <p className={s.productCount}>{totalCount} models</p>

            <Select<SortBy>
              label="Sort by"
              options={SORT_OPTIONS}
              value={sortBy}
              onChange={handleSortChange}
            />
            <Select<PerPage>
              label="Items on page"
              options={PER_PAGE_OPTIONS}
              value={perPage}
              onChange={handlePerPageChange}
            />

            <ProductsList products={products} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </Container>
  );
};
