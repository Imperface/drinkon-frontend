import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PageTitle } from '../../components/Title/PageTitle';
import { DrinkIngredientsList } from '../../components/Drink/DrinkIngredientsList/DrinkIngredientsList';
import { DrinkPageHero } from '../../components/Drink/DrinkPageHero/DrinkPageHero';
import { RecipePreparation } from '../../components/Drink/RecipePreparation/RecipePreparation';
import { Section } from '../../components/Section/Section';
import { Loader } from '../../components/Loader/Loader';
import { Container } from '../../components/Container/Container';
import { getDrinkByIdThunk } from '../../redux/drinks/operations';
import {
  selectDrinkById,
  selectDrinksError,
  selectDrinksIsLoading,
} from '../../redux/drinks/selectors';
import { useState } from 'react';
import { DrinkWrapper } from './Drink.styled';

const Drink = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  useEffect(() => {
    dispatch(getDrinkByIdThunk(drinkId));
  }, [dispatch, drinkId]);

  const drink = useSelector(selectDrinkById);
  const isLoading = useSelector(selectDrinksIsLoading);
  const isError = useSelector(selectDrinksError);

  return (
    <DrinkWrapper>
      <Section className={'drinkSection'}>
        {isLoading && <Loader />}
        {isError && <h1>{isError}</h1>}

        {Object.keys(drink).length > 0 && (
          <>
            <DrinkPageHero data={drink} />
            <DrinkIngredientsList data={drink.ingredients} />
            <RecipePreparation instructions={drink.instructions} />
          </>
        )}
      </Section>
    </DrinkWrapper>
  );
};

export default Drink;
