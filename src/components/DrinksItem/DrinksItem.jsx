import { RiDeleteBinLine } from 'react-icons/ri';
// import placeholderImage from ''; // Шлях до заглушки
import {
  StyledDrinksItem,
  StyledDivContainer,
  Title,
  TextAlcohol,
  TextDescr,
  ButtonContainer,
  ButtonMore,
  ButtonDelete,
} from './DrinksItem.styled';

export const DrinksItem = ({
  id,
  drinkThumb,
  drink,
  alcoholic,
  description,
  onRemoveDrinks,
}) => {
  return (
    <StyledDrinksItem key={id}>
      <img
        // src={drinkThumb || placeholderImage}
        src={drinkThumb}
        alt={drink}
        loading="lazy"
      />
      <StyledDivContainer>
        <div>
          <Title>{drink}</Title>
          <TextAlcohol>{alcoholic}</TextAlcohol>
        </div>
        <TextDescr>{description}</TextDescr>
        <ButtonContainer>
          <ButtonMore type="button">See more</ButtonMore>
          <ButtonDelete type="button" onClick={() => onRemoveDrinks(id)}>
            <RiDeleteBinLine color="#f3f3f3" size={24} />
          </ButtonDelete>
        </ButtonContainer>
      </StyledDivContainer>
    </StyledDrinksItem>
  );
};
