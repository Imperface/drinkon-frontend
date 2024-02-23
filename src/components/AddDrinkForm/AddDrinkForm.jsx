import { AddDrinkFormWrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from '../DrinkDescriptionFields/DrinkDescriptionFields';
import  {DrinkIngredientsFields } from '../DrinkIngredientsFields/DrinkIngredientsFields';
import {RecipePreparation} from '../RecipePreparation/RecipePreparation'


export const AddDrinkForm = () => {
  return (
   <AddDrinkFormWrapper>
   <DrinkDescriptionFields/>
   <DrinkIngredientsFields/>
   <RecipePreparation/>
   </AddDrinkFormWrapper>
  );
};