import { AddDrinkWrapper } from './AddDrink.styled';
import { PageTitle } from '../../components/Title/PageTitle';
import { DrinkDescriptionFields } from '../../components/DrinkDescriptionFields/DrinkDescriptionFields';


const AddDrink = () => {

  return (
  <AddDrinkWrapper>
    <PageTitle name= 'Add drink'/>
    <DrinkDescriptionFields/>
  </AddDrinkWrapper>
  )
};

export default AddDrink;
