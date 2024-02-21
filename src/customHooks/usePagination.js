import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/pagination/paginationReducer';
import { selectPagination } from '../redux/pagination/paginationSelectors';

export function usePagination(data, itemsPerPage) {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPagination);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    if (currentData.length === 0 && currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  }, [currentPage, data, dispatch, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return { currentPage, currentData, handlePageChange };
}
