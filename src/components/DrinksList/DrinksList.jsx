import { Pagination } from 'components/Pagination/Pagination';
import { DrinksItem } from 'components/DrinksItem/DrinksItem';
import { usePagination } from 'customHooks/usePagination';
import { useEffect, useState } from 'react';
import { StyledDrinksList } from './DrinksList.styled';

export function DrinksList({ data, onRemoveDrinks }) {
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1440) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(9);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { currentPage, currentData, handlePageChange } = usePagination(
    data,
    itemsPerPage
  );

  return (
    <>
      <StyledDrinksList>
        {currentData.map((item) => (
          <DrinksItem
            key={item._id}
            {...item}
            onRemoveDrinks={onRemoveDrinks}
          />
        ))}
      </StyledDrinksList>
      {data.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
