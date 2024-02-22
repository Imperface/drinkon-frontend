import { AddDrinkWrapper } from './AddDrink.styled';
import { PageTitle } from '../../components/Title/PageTitle';
// import { DrinkDescriptionFields } from '../../components/DrinkDescriptionFields/DrinkDescriptionFields';
import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';

const AddDrink = () => {

  return (
  <AddDrinkWrapper>
    <PageTitle name= 'Add drink'/>
    <AddDrinkForm/>
  </AddDrinkWrapper>
  )
};

export default AddDrink;
