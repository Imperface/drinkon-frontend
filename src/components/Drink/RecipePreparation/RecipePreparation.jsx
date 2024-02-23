import { Title, Container, Recipe, Images } from './RecipePreparation.styled';

import mobileImage from '../../../images/drinkPage/drink-mob@1x.jpg';
import tabletImage from '../../../images/drinkPage/drink-tab@1x.jpg';
import deskImage from '../../../images/drinkPage/drink-desc@1x.jpg';

export const RecipePreparation = () => {
  return (
    <>
      <Title>Recipe Preparation</Title>
      <Container>
        <Recipe>{description}</Recipe>
        <Images
          srcSet={`${mobileImage} 375w, ${tabletImage} 768w, ${deskImage} 1024w`}
          sizes="(max-width: 768px) 375px, (max-width: 1024px) 768px, 1024px"
          src={deskImage}
          alt="Drink"
        />{' '}
      </Container>
    </>
  );
};
