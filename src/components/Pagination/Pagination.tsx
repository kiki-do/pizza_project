import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

type PaginationProps = {
  pageCount: number;
  onChangePage: ((event: number) => void)
}

const Pagination: React.FC<PaginationProps> = ({ onChangePage, pageCount }) => {
  return (
    <div className={style.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        forcePage={pageCount - 1}
      />
    </div>
  );
};

export default Pagination;
