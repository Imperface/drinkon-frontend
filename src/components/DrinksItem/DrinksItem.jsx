import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes.js';

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
          <Link className="linkSeeMore" to={`${ROUTES.GET_DRINK_BY_ID}${_id}`}>
            See more
          </Link>
          <ButtonDelete type="button" onClick={() => onRemoveDrinks(_id)}>
            <RiDeleteBinLine color="#f3f3f3" size={24} />
          </ButtonDelete>
        </ButtonContainer>
      </StyledDivContainer>
    </StyledDrinksItem>
  );
};
