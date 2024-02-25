import React from 'react';
import { PageTitle } from '../../Title/PageTitle';
import { Button } from '../Button/Button';
import {
  Desc,
  DrinkContainer,
  DrinkText,
  ImagesDrink,
  Title,
} from './DrinkPageHero.styled';

export const DrinkPageHero = ({ data }) => {
  const {
    _id,
    drink,
    alcoholic,
    glass,
    drinkThumb,
    shortDescription,
    favorites,
  } = data;

  return (
    <DrinkContainer>
      <div className="info-inner">
        <PageTitle name={drink} />

        <DrinkText>
          <Title>
            {glass} / {alcoholic}
          </Title>
          <Desc>{shortDescription}</Desc>
          <Button id={_id} favoritesDrink={favorites} />
        </DrinkText>
      </div>
      <ImagesDrink src={drinkThumb} alt={drink} title={drink} />
    </DrinkContainer>
  );
};
