import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOwnDrinkThunk } from '../../redux/drinks/operations';
// import { selectDrinks } from "../../redux/drink/drink.selectors";
import { DrinkDescriptionFields } from '../DrinkDescriptionFields/DrinkDescriptionFields';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import { AddDrinkStyle } from './AddDrinkForm.styled';
import { DrinkIngredientsFields } from '../DrinkIngredientsFields/DrinkIngredientsFields';
import { v4 as uuidv4 } from 'uuid';
import { PageTitle } from '../Title/PageTitle';
import { Notify } from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { selectDrinksIsLoading } from '../../redux/drinks/selectors';

export const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectDrinksIsLoading);

  const [imageURL, setImageURL] = useState('');

  const [ingredientList, setIngredientList] = useState([
    { id: uuidv4(), title: '', ingredientId: '', measure: '' },
  ]);

  // add new ingredient field
  const handleIncrementProduct = () => {
    setIngredientList((prevState) => {
      return [...prevState, { id: uuidv4() }];
    });
  };

  const onButtonDeleteClick = (id) => {
    setIngredientList((prevState) => {
      if (prevState.length === 1) {
        return prevState;
      }
      return prevState.filter((item) => item.id !== id);
    });
  };

  // remove last field
  const handleDecrementProduct = () => {
    setIngredientList((prevState) => {
      return [...prevState.slice(0, -1)];
    });
  };

  const onSubmitAddDrink = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const form = e.target;

    formData.append('drink', form.elements.drink.value);
    formData.append('shortDescription', form.elements.shortDescription.value);
    formData.append('category', form.elements.category.value);
    formData.append('glass', e.target.elements.glass.value);
    formData.append('alcoholic', e.target.elements.alcoholic.value);
    formData.append('ingredients', JSON.stringify(ingredientList));
    formData.append('instructions', e.target.elements.instructions.value);
    formData.append('drinkAvatar', e.target.elements.drinkAvatar.files[0]);
    const { error, payload } = await dispatch(addOwnDrinkThunk(formData));
    if (error) {
      Notify.failure(`No drink added. Error: ${payload}`);
      return;
    }
    Notify.success('Drink successfully added');
    setImageURL('');
    form.reset();
  };

  return (
    <AddDrinkStyle>
      {isLoading && <Loader />}
      <PageTitle name="Add drink" />

      <form className="form" onSubmit={onSubmitAddDrink}>
        <DrinkDescriptionFields imageURL={imageURL} setImageURL={setImageURL} />
        <DrinkIngredientsFields
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          handleIncrementProduct={handleIncrementProduct}
          handleDecrementProduct={handleDecrementProduct}
          onButtonDeleteClick={onButtonDeleteClick}
        />
        <RecipePreparation />
        <button className="btnAdd">Add</button>
      </form>
    </AddDrinkStyle>
  );
};
