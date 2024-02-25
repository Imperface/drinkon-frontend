import { AddDrinkWrapper } from './AddDrink.styled';
import { PageTitle } from '../../components/Title/PageTitle';
// import { DrinkDescriptionFields } from '../../components/DrinkDescriptionFields/DrinkDescriptionFields';
import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';
import { Section } from 'components/Section/Section';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PopularDrinks } from 'components/PopularDrinks/PopularDrinks';

const AddDrink = () => {
  return (
    <AddDrinkWrapper>
      <Section className="addDrinkSection">
        <div className="drinkBlocks">
          <AddDrinkForm />
          <div className="sideBar">
            <FollowUs title="Follow Us" />
            <PopularDrinks />
          </div>
        </div>
      </Section>
    </AddDrinkWrapper>
  );
};

export default AddDrink;
