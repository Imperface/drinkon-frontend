import {
  Title,
  ListIngredients,
  ItemIngredient,
  ImagesIngredient,
  InfoIngredient,
  NameIngredient,
  MeasureIngredient,
} from './DrinkIngredientsList.styled';

export const DrinkIngredientsList = ({ data }) => {
  return (
    <>
      <Title>Ingredients</Title>
      <ListIngredients>
        {data.map((item) => {
          return (
            <ItemIngredient key={item._id}>
              <ImagesIngredient
                src={item.ingredientId.ingredientThumb}
                alt={item.title}
              />
              <InfoIngredient>
                <NameIngredient>{item.title}</NameIngredient>
                <MeasureIngredient>{item.measure}</MeasureIngredient>
              </InfoIngredient>
            </ItemIngredient>
          );
        })}
      </ListIngredients>
    </>
  );
};
