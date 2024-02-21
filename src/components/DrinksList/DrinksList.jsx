import { Pagination } from 'components/Pagination/Pagination';
import { DrinksItem } from 'components/DrinksItem/DrinksItem';
import { usePagination } from 'customHooks/usePagination';
import { useEffect, useState } from 'react';
import { StyledDrinksList } from './DrinksList.styled';
import { useDispatch } from 'react-redux';
import { deleteDrink } from '../../redux/drinks/drinksReducer';

export function DrinksList({ data }) {
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(8); // Змінюємо кількість карток на сторінці для мобільних пристроїв
      } else {
        setItemsPerPage(9); // Відновлюємо кількість карток на сторінці для більших екранів
      }
    };

    window.addEventListener('resize', handleResize);

    // Підписка на подію resize відбувається під час завантаження сторінки
    handleResize();

    // Видалення підписки на подію resize при видаленні компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const dispatch = useDispatch();

  const handleDeleteDrink = (drinkId) => {
    dispatch(deleteDrink(drinkId));
  };

  const { currentPage, currentData, handlePageChange } = usePagination(
    data,
    itemsPerPage
  ); // Використовуємо хук

  return (
    <>
      <StyledDrinksList>
        {currentData.map((item) => (
          <DrinksItem
            key={item._id}
            {...item}
            onRemoveDrinks={() => handleDeleteDrink(item._id)}
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
