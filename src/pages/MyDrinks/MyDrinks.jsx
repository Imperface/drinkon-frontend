import { MyDrinksWrapper } from './MyDrinks.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/pageTitle/PageTitle';
import { DrinksList } from 'components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { selectOwnDrinks } from '../../redux/drinks/selectors';
import { useEffect } from 'react';
import {
  getOwnDrinksThunk,
  removeOwnDrinkThunk,
} from '../../redux/drinks/operations';

const MyDrinks = () => {
  const ownDrinksData = useSelector(selectOwnDrinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnDrinksThunk());
  }, [dispatch]);

  const onRemoveOwnDrinks = (drinkId) => {
    dispatch(removeOwnDrinkThunk(drinkId));
  };

  return (
    <MyDrinksWrapper>
      <Section className="myDrinks">
        <PageTitle name="MyDrinks" />
        <DrinksList data={ownDrinksData} onRemoveDrinks={onRemoveOwnDrinks} />
      </Section>
    </MyDrinksWrapper>
  );
};

export default MyDrinks;
