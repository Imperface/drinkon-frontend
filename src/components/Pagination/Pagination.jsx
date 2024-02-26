import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/pagination/paginationReducer';
import { selectPagination } from '../../redux/pagination/paginationSelectors';
import {
  PaginationList,
  PaginationItem,
  PaginationButton,
  Navigation,
} from './Pagination.styled';
// import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
// import { IoEllipse } from 'react-icons/io5';

export const Pagination = ({ itemsPerPage, totalItems }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPagination);
  const totalPages = Math.ceil(totalItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Додаємо кнопку "<" для переходу на попередню сторінку
    pageNumbers.push(
      <PaginationItem key={'prev'}>
        <PaginationButton
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? 'disabled' : ''}
        >prev
          {/* <GoChevronLeft className="chevron" /> */}
        </PaginationButton>
      </PaginationItem>
    );

    // Додаємо кнопки з номерами сторінок
    // for (let i = 1; i <= totalPages; i++) {
    //   pageNumbers.push(
    //     <PaginationItem key={i}>
    //       <PaginationButton type="button" onClick={() => handlePageChange(i)}>
    //         <IoEllipse
    //           className={currentPage === i ? 'ioEllipse active' : 'ioEllipse'}
    //         />
    //         <span>{i}</span>
    //       </PaginationButton>
    //     </PaginationItem>
    //   );
    // }

    // Додаємо кнопку ">" для переходу на наступну сторінку
    pageNumbers.push(
      <PaginationItem key={'next'}>
        <PaginationButton
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? 'disabled' : ''}
        >next
          {/* <GoChevronRight className="chevron" /> */}
        </PaginationButton>
      </PaginationItem>
    );

    return pageNumbers;
  };

  return (
    <Navigation aria-label="Page navigation" className="navigation">
      <PaginationList>{renderPageNumbers()}</PaginationList>
    </Navigation>
  );
};
