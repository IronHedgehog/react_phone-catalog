import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      previousLabel="‹"
      nextLabel="›"
      breakLabel="..."

      containerClassName={s.pagination}
      pageClassName={s.pageItem}
      pageLinkClassName={s.pageLink}
      activeClassName={s.active}
      activeLinkClassName={s.activeLink}
      previousClassName={s.previous}
      previousLinkClassName={s.arrow}
      nextClassName={s.next}
      nextLinkClassName={s.arrow}
      disabledClassName={s.disabled}
      disabledLinkClassName={s.disabledLink}
      breakClassName={s.break}
      breakLinkClassName={s.breakLink}
    />
  );
};
