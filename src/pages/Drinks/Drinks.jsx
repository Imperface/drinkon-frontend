import { DrinksWrapper } from './Drinks.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/Title/PageTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiltersCategories } from '../../redux/filters/selectors';
import { selectSearchDrinks } from '../../redux/drinks/selectors';
import { getSearchDrinksThunk } from '../../redux/drinks/operations';
import { getCategoryThunk } from '../../redux/filters/operations';
import { MyComponent } from 'components/DrinksSearch/DrinksSearch';
import { Pagination } from 'components/Pagination/Pagination';
import { usePagination } from 'customHooks/usePagination';

const Drinks = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const ingredients = useSelector(selectSearchDrinks);
  const categories = useSelector(selectFiltersCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSearchDrinksThunk({
        query: 'al',
        category: '',
        ingredientId: '',
        page: '',
        limit: '',
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  const handleSearch = (query, value, ingredientId) => {
    dispatch(
      getSearchDrinksThunk({
        query: query,
        category: value,
        ingredientId: ingredientId,
        page: '',
        limit: '',
      })
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1440) {
        setItemsPerPage(10);
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
    ingredients.drinks || [],
    itemsPerPage
  );

  return (
    <DrinksWrapper>
      <Section className="drinks">
        <PageTitle name="Drinks" />
        <MyComponent
          ingredients={ingredients}
          categories={categories}
          onSearch={handleSearch}
        />
        {ingredients.drinks && (
          <ul className="list">
            {currentData.map((drink) => (
              <li className="item" key={drink._id}>
                <img
                  className="drinkImg"
                  src={drink.drinkThumb}
                  alt={drink.drink}
                />
                <div className="drinkContainer">
                  <h2 className="title">{drink.drink}</h2>
                  <button className="button" type="button">
                    See more
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {ingredients.drinks && ingredients.drinks.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={ingredients.drinks}
            onPageChange={handlePageChange}
          />
        )}
      </Section>
    </DrinksWrapper>
  );
};

export default Drinks;
