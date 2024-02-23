// import { AddDrinkWrapper } from './AddDrink.styled';
import { Container } from '../../components/Container/Container'
import { PageTitle } from '../../components/pageTitle/PageTitle'
import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm'
import { FollowUs } from '../../components/FollowUs/FollowUs'
import { PopularDrinks } from '../../components/PopularDrinks/PopularDrinks'
import { AddDrinkWrapper, AddDrinkFormContainer, AddDrinkContainer } from './AddDrink.styled'


const AddDrink = () => {
  return ( 

  <Container>
    <AddDrinkWrapper>
      <PageTitle name="Add drink" />
      <AddDrinkContainer>
        <AddDrinkFormContainer>
          <AddDrinkForm/>
        </AddDrinkFormContainer>
        <div><FollowUs/><PopularDrinks/>
        </div>
        
      </AddDrinkContainer>
        {/* <div className="addContainer">
          <div className="addImage"></div>
          <div className="addForm"></div>
        </div>
        <div className="followUs"></div>
        <div className="popularDrinks"></div>
        <div className="ingredients"></div>
        <div className="recipePreparation"></div>
        <button className="addButton">Add</button> */}
    </AddDrinkWrapper>
  </Container>
  );
};

export default AddDrink;
