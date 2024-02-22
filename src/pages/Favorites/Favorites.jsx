import { FavoritesWrapper } from './Favorites.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/Title/PageTitle';
import { DrinksList } from 'components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesData } from '../../redux/favorites/favoritesSelectors';
import { useEffect } from 'react';

import { getFavoritesDrinksThunk } from '../../redux/drinks/operations';
import { selectFavoritesDrinks } from '../../redux/drinks/selectors';

const Favorites = () => {
  const drinkFavoriteData = useSelector(selectFavoritesDrinks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesDrinksThunk());
  }, [dispatch]);

  const onRemoveDrinks = (drinkId) => {
    dispatch(deleteFavorite(drinkId));
  };

  return (
    <FavoritesWrapper>
      <Section className="favorites">
        <PageTitle name="Favorites" />
        <DrinksList data={drinkFavoriteData} onRemoveDrinks={onRemoveDrinks} />
      </Section>
    </FavoritesWrapper>
  );
};

export default Favorites;
