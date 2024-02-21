import { ReactComponent as DeleteIcon } from 'Icons/trash-01.svg';
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
  ingredientThumb,
  // drinkThumb,
  title,
  alcohol,
  description,
  onOpenModal,
  onRemoveDrinks,
}) => {
  const checkAlco = (value) => {
    return value && value.toLowerCase() === 'yes'
      ? 'Alcoholic'
      : 'Non-Alcoholic';
  };

  return (
    <StyledDrinksItem key={id}>
      <img
        // src={ingredientThumb || placeholderImage}
        src={ingredientThumb}
        alt={title}
        loading="lazy"
      />
      <StyledDivContainer>
        <div>
          <Title>{title}</Title>
          <TextAlcohol>{checkAlco(alcohol)}</TextAlcohol>
        </div>
        <TextDescr>{description}</TextDescr>
        <ButtonContainer>
          <ButtonMore type="button" onClick={onOpenModal}>
            See more
          </ButtonMore>
          <ButtonDelete type="button" onClick={onRemoveDrinks}>
            <DeleteIcon />
          </ButtonDelete>
        </ButtonContainer>
      </StyledDivContainer>
    </StyledDrinksItem>
  );
};
