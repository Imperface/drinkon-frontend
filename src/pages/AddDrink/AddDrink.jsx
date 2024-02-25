import { AddDrinkWrapper } from './AddDrink.styled';
import { PageTitle } from '../../components/Title/PageTitle';
// import { DrinkDescriptionFields } from '../../components/DrinkDescriptionFields/DrinkDescriptionFields';
import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';
import { Section } from 'components/Section/Section';

const AddDrink = () => {
  return (
    <AddDrinkWrapper>
      <Section className="addDrinkSection">
        <PageTitle name="Add drink" />
        <AddDrinkForm />
      </Section>
    </AddDrinkWrapper>
  );
};

export default AddDrink;
