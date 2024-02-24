import { FavoritesWrapper } from './Favorites.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/Title/PageTitle';
import { DrinksList } from 'components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  getFavoritesDrinksThunk,
  removeFavoriteDrinksThunk,
} from '../../redux/drinks/operations';
import { selectFavoritesDrinks } from '../../redux/drinks/selectors';
import { Placeholder } from 'components/Placeholder/Placeholder';

const Favorites = () => {
  const drinkFavoriteData = useSelector(selectFavoritesDrinks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesDrinksThunk());
  }, [dispatch]);

  const onRemoveDrinks = (drinkId) => {
    dispatch(removeFavoriteDrinksThunk(drinkId));
  };

  return (
    <FavoritesWrapper>
      <Section className="favorites">
        <PageTitle name="Favorites" />
        {drinkFavoriteData.length > 0 ? (
          <DrinksList
            data={drinkFavoriteData}
            onRemoveDrinks={onRemoveDrinks}
          />
        ) : (
          <Placeholder />
        )}
      </Section>
    </FavoritesWrapper>
  );
};

export default Favorites;
