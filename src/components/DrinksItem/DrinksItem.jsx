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
  _id,
  drinkThumb,
  drink,
  alcoholic,
  description,
  onRemoveDrinks,
}) => {
  console.log(_id);
  return (
    <StyledDrinksItem key={_id}>
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
          <ButtonDelete type="button" onClick={() => onRemoveDrinks(_id)}>
            <RiDeleteBinLine />
          </ButtonDelete>
        </ButtonContainer>
      </StyledDivContainer>
    </StyledDrinksItem>
  );
};
