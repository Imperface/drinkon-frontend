import { FavoritesWrapper } from './Favorites.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/pageTitle/PageTitle';
import { DrinksList } from 'components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesData } from '../../redux/favorites/favoritesSelectors';
import { useEffect } from 'react';
import {
  deleteFavorite,
  getFavorites,
} from '../../redux/favorites/favoritesOperations';

const Favorites = () => {
  const drinkFavoriteData = useSelector(selectFavoritesData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
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
