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

  // get dynamic ingredient fields
  // const [ingredientsList, setIngredientsList] = useState([]);

  // add new ingredient field
  const handleIncrementProduct = () => {
    setIngredientsList((prevState) => {
      return [
        ...prevState,
        <div className="itemIngr" key={uuidv4()}>
          <Select
            options={getIngredientsOptions()}
            classNamePrefix="react-select"
            placeholder="select a category"
          />
          <input type="text" name="ingredient" />
        </div>,
      ];
    });
  };

  // remove last field
  const handleDecrementProduct = () => {
    setIngredientsList((prevState) => {
      return [...prevState.slice(0, -1)];
    });
  };

  const onInputChange = (inputValue) => {
    console.log(inputValue);
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
              disabled={ingredientList.length === 3}
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
          {ingredientList.map((item) => (
            <div className="itemIngr" key={item.id}>
              <Select
                name={`ingredient${item.id}`}
                options={getIngredientsOptions()}
                classNamePrefix="react-select"
                placeholder="select a category"
                onChange={(inputValue) => {
                  const ingredientObject = {
                    ...inputValue,
                    name: `ingredient${item.id}`,
                  };
                }}
              />
              <input type="text" name={`measure${id}`} />
            </div>
          ))}
        </div>
      )}
    </IngredientsStyle>
  );
};
