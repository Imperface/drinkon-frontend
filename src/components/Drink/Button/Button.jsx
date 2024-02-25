import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonFavorite } from './Button.styled';

import {
  addFavoriteDrinksThunk,
  removeFavoriteDrinksThunk,
} from '../../../redux/drinks/operations';
import { selectUserData } from '../../../redux/users/selectors';

export const Button = ({ id, favoritesDrink }) => {
  const [favorite, setfavorite] = useState(null);
  const dispatch = useDispatch();

  const { _id } = useSelector(selectUserData);

  useEffect(() => {
    if (favoritesDrink && favoritesDrink.length) {
      favoritesDrink.find((item) => {
        if (item._id === _id) {
          return setfavorite(true);
        }
      });
    }
  }, [favoritesDrink, _id]);

  const handleAddFavorite = () => {
    dispatch(addFavoriteDrinksThunk(id));
    setfavorite(true);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteDrinksThunk(id));
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
