import { useState, useEffect, useRef } from 'react';
import {
  ContainerDiv,
  Input,
  CustomSelect,
  CustomStyles,
} from './DrinksSearch.styled';
import { selectFiltersIngredients } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../redux/filters/operations';
import throttle from 'lodash.throttle';

export const MyComponent = ({
  categories,
  setQueryValue,
  queryValue,
  setCategoryValue,
  setIngredientValue,
  setPage,
}) => {
  const dispatch = useDispatch();
  // get ingredient
  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  // get ingredient
  const ingredients = useSelector(selectFiltersIngredients);

  // get ingredient options
  const getIngredientsOptions = () => {
    return ingredients.map((item) => ({ value: item._id, label: item.title }));
  };

  const handleInputChange = (e) => {
    setQueryValue(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (selectedOption) => {
    if (selectedOption === null) {
      setCategoryValue('');
      return;
    }
    setPage(1);
    setCategoryValue(selectedOption);
  };

  const handleIngredientChange = (selectedOptions) => {
    if (selectedOptions === null) {
      setIngredientValue('');
      return;
    }
    setPage(1);
    setIngredientValue(selectedOptions);
  };

  const optionsCategories = categories.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <ContainerDiv>
      <form className="form">
        <div className="inputContainer">
          <Input
            type="text"
            value={queryValue}
            onInput={throttle(handleInputChange, 10000)}
            placeholder="Enter the text"
          />
        </div>

        <CustomSelect
          placeholder="All categories"
          isClearable
          cacheOptions
          onChange={handleCategoryChange}
          options={optionsCategories}
          styles={CustomStyles}
        />
        <CustomSelect
          placeholder="Ingredients"
          isClearable
          cacheOptions
          onChange={handleIngredientChange}
          options={getIngredientsOptions()}
          styles={CustomStyles}
        />
      </form>
    </ContainerDiv>
  );
};
