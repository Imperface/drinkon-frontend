import { MyDrinksWrapper } from './MyDrinks.styled';
import { Section } from 'components/Section/Section';
import { PageTitle } from 'components/Title/PageTitle';
import { DrinksList } from 'components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { selectOwnDrinks } from '../../redux/drinks/selectors';
import { useEffect } from 'react';
import {
  getOwnDrinksThunk,
  removeOwnDrinkThunk,
} from '../../redux/drinks/operations';
import { Placeholder } from 'components/Placeholder/Placeholder';

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
        {ownDrinksData.length > 0 ? (
          <DrinksList data={ownDrinksData} onRemoveDrinks={onRemoveOwnDrinks} />
        ) : (
          <Placeholder />
        )}
      </Section>
    </MyDrinksWrapper>
  );
};

export default MyDrinks;
