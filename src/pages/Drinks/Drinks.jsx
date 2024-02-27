import { DrinksWrapper } from './Drinks.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/Title/PageTitle';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiltersCategories } from '../../redux/filters/selectors';
import { selectSearchDrinks } from '../../redux/drinks/selectors';
import { getSearchDrinksThunk } from '../../redux/drinks/operations';
import { getCategoryThunk } from '../../redux/filters/operations';
import { MyComponent } from 'components/DrinksSearch/DrinksSearch';
import { Link } from 'react-router-dom';
import { Placeholder } from 'components/Placeholder/Placeholder';
import throttle from 'lodash.throttle';
const Drinks = () => {
  // get image count
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [countOfPages, setCountOfPages] = useState(1);
  // get params
  const [queryValue, setQueryValue] = useState('');
  const [query, setQuery] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [ingredientValue, setIngredientValue] = useState('');
  const [page, setPage] = useState(1);

  // get options for Selects
  const ingredients = useSelector(selectSearchDrinks);
  const categories = useSelector(selectFiltersCategories);
  const dispatch = useDispatch();

  // get first render drinks
  useEffect(() => {
    dispatch(getSearchDrinksThunk({}));
  }, [dispatch]);

  // get categories
  useEffect(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  const makeApiRequestT = (value) => {
    setQuery(value);
  };

  const makeApiRequestThrottled = useRef(throttle(makeApiRequestT, 3000));

  useEffect(() => {
    const searchParams = { page, limit: itemsPerPage };
    if (query) {
      searchParams.query = query;
    }
    if (categoryValue) {
      searchParams.category = categoryValue.value;
    }
    if (ingredientValue) {
      searchParams.ingredientId = ingredientValue.value;
    }
    dispatch(getSearchDrinksThunk(searchParams));
  }, [query, categoryValue, ingredientValue, page, itemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440) {
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

  const handleChange = (value) => {
    setQueryValue(value);
    makeApiRequestThrottled.current(value);
  };

  const onButtonPrevClick = (e) => {
    if (page === 1) {
      return;
    }
    setPage((prevState) => prevState - 1);
  };
  const onButtonNextClick = (e) => {
    setPage((prevState) => prevState + 1);
  };

  const getNumberOfPages = () => {
    const countOfDrinks = Number(ingredients.quantityTotal);
    return Math.ceil(countOfDrinks / itemsPerPage);
  };

  return (
    <DrinksWrapper>
      {/* {isLoading && <Loader />} */}
      <Section className="drinks">
        <PageTitle name="Drinks" />
        <MyComponent
          setQueryValue={handleChange}
          setCategoryValue={setCategoryValue}
          setIngredientValue={setIngredientValue}
          queryValue={queryValue}
          categoryValue={categoryValue}
          ingredients={ingredients}
          categories={categories}
          setPage={setPage}
        />
        {ingredients.drinks && (
          <ul className="list">
            {ingredients.drinks.map((drink) => (
              <li className="item" key={drink._id}>
                <img
                  className="drinkImg"
                  src={drink.drinkThumb}
                  alt={drink.drink}
                />
                <div className="drinkContainer">
                  <h2 className="title">{drink.drink}</h2>
                  <Link to={`/drinks/${drink._id}`} className="button">
                    See more
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
        {ingredients.drinks && ingredients.drinks.length === 0 && (
          <Placeholder text="Nothing was found for your request" />
        )}
        {ingredients.drinks && ingredients.quantityTotal > itemsPerPage && (
          <div className="paginationBlock">
            <button
              className="button-pagination prev-button"
              onClick={onButtonPrevClick}
              disabled={page === 1}
            >
              Prev
            </button>
            <button
              className="button-pagination next-button"
              onClick={onButtonNextClick}
              disabled={getNumberOfPages() === page}
            >
              Next
            </button>
          </div>
        )}
      </Section>
    </DrinksWrapper>
  );
};

export default Drinks;
