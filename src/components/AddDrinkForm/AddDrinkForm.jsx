import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addDrinkThunk } from "../../redux/drink/drink.reducer";
import { selectDrinks } from "../../redux/drink/drink.selectors";
import { DrinkDescriptionFields } from '../DrinkDescriptionFields/DrinkDescriptionFields';

export const AddDrinkForm =() => {
    
const dispatch = useDispatch()
const drinks = useSelector(selectDrinks)

const onFormSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const newDrink = {
          name: event.target.elements.name.value,
          number: event.target.elements.number.value,
  };

const hasDuplicates = drinks.some(item => item.name === newDrink.name);

if (hasDuplicates) {
  alert(`${newDrink.name} is already in the contacts list`);
  return;
}

dispatch(addDrinkThunk(newDrink));

form.reset();
};

return (
    <div>
        <form onSubmit={onFormSubmit}>
        <DrinkDescriptionFields/>
        </form>

    </div>
)
}
