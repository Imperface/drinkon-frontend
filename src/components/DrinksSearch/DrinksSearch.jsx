import { useState, useEffect } from 'react';
import {
  ContainerDiv,
  Input,
  CustomSelect,
  CustomStyles,
} from './DrinksSearch.styled';
import { LuSearch } from 'react-icons/lu';
import { selectFiltersIngredients } from '../../redux/filters/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../redux/filters/operations';

export const MyComponent = ({ categories, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState('');
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
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption?.value || '');
  };

  const handleIngredientChange = (selectedOptions) => {
    console.log(selectedOptions);
    setSelectedIngredients(selectedOptions?.value || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery, selectedCategory, selectedIngredients);
    onSearch(`${searchQuery}`, `${selectedCategory}`, selectedIngredients);
    setSearchQuery('');
  };

  useEffect(() => {
    onSearch(searchQuery, selectedCategory, selectedIngredients);
  }, [searchQuery, selectedCategory, selectedIngredients]);

  const optionsCategories = categories.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <ContainerDiv>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Enter the text"
          />
          <button className="buttonSvg" type="submit">
            <LuSearch color="#f3f3f3" size={24} />
          </button>
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
