import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/pagination/paginationReducer';
import { selectPagination } from '../../redux/pagination/paginationSelectors';
import {
  PaginationList,
  PaginationItem,
  PaginationButton,
  PaginationEllipseSvg,
  PaginationChevronLeft,
  PaginationChevronRight,
} from './Pagination.styled';

export const Pagination = ({ itemsPerPage, totalItems }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPagination);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Додаємо кнопку "<" для переходу на попередню сторінку
    pageNumbers.push(
      <PaginationItem key={'prev'}>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PaginationChevronLeft />
        </PaginationButton>
      </PaginationItem>
    );

    // Додаємо кнопки з номерами сторінок
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationButton onClick={() => handlePageChange(i)}>
            <PaginationEllipseSvg
              active={currentPage === i ? 'true' : 'false'}
            />
            <span>{i}</span>
          </PaginationButton>
        </PaginationItem>
      );
    }

    // Додаємо кнопку ">" для переходу на наступну сторінку
    pageNumbers.push(
      <PaginationItem key={'next'}>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PaginationChevronRight />
        </PaginationButton>
      </PaginationItem>
    );

    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation">
      <PaginationList>{renderPageNumbers()}</PaginationList>
    </nav>
  );
};
// зразок------------
// import { usePagination } from 'папка_з_кастомними_хуками'; // Імпортуємо кастомний хук для пагінації

// export function CardList({
//   data,
//   onAddToFavorites,
//   onRemoveFromFavorites,
// }) {
// Зразок змінних
// const itemsPerPage = 9;
// Використовуємо кастомний хук для пагінації
// const { currentPage, currentData, handlePageChange } = usePagination(data, itemsPerPage);

// ваш код

// return (
//   <>
//     <ul className={css.list}>
// Проходимося по кожному елементу в масиві currentData і створюємо відповідні компоненти
//       {currentData.map(item => (
// ваш код
//         <CardMarkup
//           key={nanoid()}
//           {...item}
//           onAddToFavorites={() => onAddToFavorites(item)}
//           onRemoveFromFavorites={() => onRemoveFromFavorites(item)}
//         />
//       ))}
//     </ul>
// вставляєм пагінатор
//     {data.length > itemsPerPage && (
//       <Pagination
//         currentPage={currentPage}
//         itemsPerPage={itemsPerPage}
//         totalItems={data.length}
//         onPageChange={handlePageChange}
//       />
//     )}
//   </>
// );
// }
