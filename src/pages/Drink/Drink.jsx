import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DrinkIngredientsList } from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import { DrinkPageHero } from '../../components/DrinkPageHero/DrinkPageHero';
import { RecipePreparation } from '../../components/RecipePreparation/RecipePreparation';
import { Section } from '../../components/Section/Section';
import { Loader } from '../../components/Loader/Loader';
import { Container } from '../../components/Container/Container';
import { getDrinkByIdThunk } from '../../redux/drinks/operations';
import {
  selectDrinkById,
  selectDrinksError,
  selectDrinksIsLoading,
} from '../../redux/drinks/selectors';

export const Drink = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector(selectDrinkById);
  const isLoading = useSelector(selectDrinksIsLoading);
  const isError = useSelector(selectDrinksError);

  useEffect(() => {
    dispatch(getDrinkByIdThunk(drinkId));
  }, [dispatch, drinkId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {isError && <h1>{isError}</h1>}

        {drink && (
          <>
            <PageTitle name={drink.recipe.drink} />
            <DrinkPageHero data={drink.recipe} />
            <DrinkIngredientsList data={drink.recipe.ingredients} />
            <RecipePreparation description={drink.recipe.description} />
          </>
        )}
      </Container>
    </Section>
  );
};
