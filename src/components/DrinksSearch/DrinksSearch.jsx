import { useState, useEffect } from 'react';
import { ContainerDiv, Input, CustomSelect, CustomStyles } from './DrinksSearch.styled';
import { LuSearch } from 'react-icons/lu';

export const MyComponent = ({ categories, ingredients, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = selectedOption => {
    setSelectedCategory(selectedOption.value);
  };

  const handleIngredientChange = selectedOptions => {
      setSelectedIngredients(selectedOptions.label);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCategory, selectedIngredients);
    setSearchQuery('');
  };

  useEffect(() => {
    onSearch(searchQuery, selectedCategory, selectedIngredients);
  }, [searchQuery, selectedCategory, selectedIngredients]);

  const optionsCategories = categories.map((category) => ({
    value: category,
    label: category,
  }));
  const optionsIngredients = ingredients.drinks && ingredients.drinks.map((category) => ({
    value: category._id,
    label: category.drink,
  }));

  return (
    <ContainerDiv>
      <form className='form' onSubmit={handleSubmit}>
        <div className='inputContainer' >
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Enter the text"
          />
          <button className='buttonSvg' type="submit">
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
          options={optionsIngredients}
          styles={CustomStyles}
        />
      </form>
    </ContainerDiv>
  );
};
