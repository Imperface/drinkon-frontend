import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPopularDrinksThunk } from '../../redux/drinks/operations';
import {
  selectDrinksError,
  selectDrinksIsLoading,
  selectPopularDrinks,
} from '../../redux/drinks/selectors';
import * as ROUTES from 'constants/routes.js';

import {
  PopularDrinksWrapper,
  PopularDrinksList,
  PopularDrinksListItem,
  PopularDrinksListImg,
  PopularDrinksListDescriptionContainer,
  PopularDrinksListDescriptionTitle,
  PopularDrinksListDescription,
  PopularDrinksTitle,
} from './PopularDrinks.styled';

export const PopularDrinks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularDrinksThunk());
  }, [dispatch]);

  const popularDrinks = useSelector(selectPopularDrinks);
  const loading = useSelector(selectDrinksIsLoading);
  const error = useSelector(selectDrinksError);

  console.log(popularDrinks);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (popularDrinks.length === 0) {
    return <p>No popular drinks available at the moment.</p>;
  }

  return (
    <PopularDrinksWrapper>
      <PopularDrinksTitle>Popular drinks</PopularDrinksTitle>
      <PopularDrinksList>
        {popularDrinks.map((drink) => (
          <PopularDrinksListItem key={drink._id}>
            <Link
              to={`${ROUTES.GET_DRINK_BY_ID}${drink._id}`}
              className="popular-link"
            >
              <PopularDrinksListImg src={drink.drinkThumb} alt={drink.drink} />
              <PopularDrinksListDescriptionContainer>
                <PopularDrinksListDescriptionTitle>
                  {drink.drink}
                </PopularDrinksListDescriptionTitle>
                <PopularDrinksListDescription>
                  {drink.shortDescription}
                </PopularDrinksListDescription>
              </PopularDrinksListDescriptionContainer>
            </Link>
          </PopularDrinksListItem>
        ))}
      </PopularDrinksList>
    </PopularDrinksWrapper>
  );
};
