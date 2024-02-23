import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './Button.styled';

import {
  addFavoriteDrinksThunk,
  removeFavoriteDrinksThunk,
} from '../../../redux/drinks/operations';

export const Button = ({ id, favoriteDrink }) => {
  const [favorite, setfavorite] = useState(null);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    if (favoriteDrink.length) {
      favoriteDrink.find((item) => {
        if (item === userId) {
          return setfavorite(true);
        }
      });
    }
  }, [favoriteDrink, userId]);

  const handleAddFavorite = () => {
    dispatch(
      addFavoriteDrinksThunk({
        drinkId: id,
      })
    );
    setfavorite(true);
  };

  const handleRemoveFavorite = () => {
    dispatch(
      removeFavoriteDrinksThunk({
        drinkId: id,
      })
    );
    setfavorite(false);
  };

  return (
    <>
      {!favorite ? (
        <ButtonFavorite type="button" onClick={() => handleAddFavorite()}>
          Add to favorite drinks
        </ButtonFavorite>
      ) : (
        <ButtonFavorite type="button" onClick={() => handleRemoveFavorite()}>
          Remove from favorite drinks
        </ButtonFavorite>
      )}
    </>
  );
};
