import React from 'react';
import { useEffect, useState } from 'react';
import { IngredientsStyle } from './DrinkIngredientsFields.styled';
import { CgClose } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { selectFiltersIngredients } from '../../redux/filters/selectors';
import { getIngredientsThunk } from '../../redux/filters/operations';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

export const DrinkIngredientsFields = ({
  ingredientList,
  setIngredientList,
  handleIncrementProduct,
  handleDecrementProduct,
  onButtonDeleteClick,
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

  const handleChangeIngredient = ({ value, label }, itemId) => {
    const updatedIngredientsList = ingredientList.map((i) => {
      if (i.id === itemId) {
        i.ingredientId = value;
        i.title = label;
      }
      return i;
    });
    setIngredientList(updatedIngredientsList);
  };

  const handleChangeMeasure = ({ value }, itemId) => {
    const updatedIngredientsList = ingredientList.map((i) => {
      if (i.id === itemId) {
        i.measure = value;
      }
      return i;
    });
    setIngredientList(updatedIngredientsList);
  };

  return (
    <IngredientsStyle>
      <div>
        <div className="title">
          <h3 className="text">Ingredients</h3>
          <div className="counter">
            <button
              className="btnCounter"
              onClick={handleDecrementProduct}
              disabled={ingredientList.length === 1}
            >
              -
            </button>
            <span className="titleCounter">{ingredientList.length}</span>
            <button className="btnCounter" onClick={handleIncrementProduct}>
              +
            </button>
          </div>
        </div>
      </div>
      {ingredients.length > 0 && (
        <div className="listIngr">
          {ingredientList.map((item, idx) => (
            <div className="itemIngr" key={item.id}>
              <Select
                className="itemIngrSelect"
                options={getIngredientsOptions()}
                classNamePrefix="react-select"
                placeholder="select a category"
                onChange={(inputValue) =>
                  handleChangeIngredient(inputValue, item.id)
                }
                required
              />
              <input
                className="itemIngrInput"
                type="text"
                placeholder="1 cl"
                name={`ingredients[${idx}].measure`}
                onChange={(e) => handleChangeMeasure(e.target, item.id)}
                required
              />
              <button
                className="itemIngrButton"
                onClick={() => onButtonDeleteClick(item.id)}
              >
                <CgClose />
              </button>
            </div>
          ))}
        </div>
      )}
    </IngredientsStyle>
  );
};
