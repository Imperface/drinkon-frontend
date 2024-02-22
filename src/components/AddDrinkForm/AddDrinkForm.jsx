import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addOwnDrinkThunk } from "../../redux/drinks/operations";
// import { selectDrinks } from "../../redux/drink/drink.selectors";
import { DrinkDescriptionFields } from '../DrinkDescriptionFields/DrinkDescriptionFields';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import { AddDrinkStyle } from './AddDrinkForm.styled';
export const AddDrinkForm =() => {
    const dispatch = useDispatch()

    const onSubmitAddDrink = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // const file = e.target.elements.drinkAvatar.files[0];
        // const drink = e.target.elements.drink.value;
        formData.append('drinkAvatar', e.target.elements.drinkAvatar.files[0]);
        formData.append('drink', e.target.elements.drink.value);
        formData.append('category', e.target.elements.category.value);
        formData.append('alcoholic', e.target.elements.alcoholic.value);
        formData.append('glass', e.target.elements.glass.value);
        formData.append('instructions', e.target.elements.instructions.value);
        formData.append('shortDescription', e.target.elements.shortDescription.value);
        formData.append(
          'ingredients',
          '[{"title":"ingredient1","measure": "measure1", "ingredientId": "64aebb7f82d96cc69e0eb4a7"}, {"title":"ingredient2","measure": "measure2", "ingredientId": "64aebb7f82d96cc69e0eb4a7"},{"title":"ingredient3","measure": "measure3", "ingredientId": "64aebb7f82d96cc69e0eb4a7"}]'
        );
    
        await dispatch(addOwnDrinkThunk(formData));
      };

return (
    <AddDrinkStyle>
        <form onSubmit={onSubmitAddDrink}>
        {/* <input type="file" name="drinkAvatar" /> */}
        <DrinkDescriptionFields/>
        <RecipePreparation/>
        <button className='btnAdd'>Add</button>
      </form>
       
          

    </AddDrinkStyle>
)
}

