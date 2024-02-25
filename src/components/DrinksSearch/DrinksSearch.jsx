import { useState, useEffect } from 'react';
import { ContainerDiv, Input, CustomSelect, CustomStyles } from './DrinksSearch.styled';
import { LuSearch } from 'react-icons/lu';

export const MyComponent = ({ categories, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
    onSearch(searchQuery);
  };

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  const options = categories.map((category) => ({
    value: category,
    label: category,
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
          options={options}
          styles={CustomStyles}
        />
        <CustomSelect
          placeholder="Ingredients"
          isClearable
          cacheOptions
          options={options}
          styles={CustomStyles}
        />
      </form>
    </ContainerDiv>
  );
};
