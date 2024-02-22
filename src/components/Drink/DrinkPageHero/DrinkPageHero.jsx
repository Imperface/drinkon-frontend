import React from 'react';
import { Button } from '../Button/Button';
import {
  Desc,
  DrinkContainer,
  DrinkText,
  ImagesDrink,
  Title,
} from './DrinkPageHero.styled';

export const DrinkPageHero = ({ data } = data) => {
  const { _id, drink, drinkThumb, alcoholic, glass, description, favorite } =
    data;

  return (
    <DrinkContainer>
      <DrinkText>
        <Title>
          {glass} / {alcoholic}
        </Title>
        <Desc>{description}</Desc>
        <Button id={_id} favoriteDrink={favorite} />
      </DrinkText>
      <ImagesDrink src={drinkThumb} alt={drink} title={drink} />
    </DrinkContainer>
  );
};
