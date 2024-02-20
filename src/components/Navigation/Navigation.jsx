import { NavigationLink, StyledNavigation } from './Navigation.styled';
import {
  HOME_ROUTE,
  DRINKS_ROUTE,
  ADD_DRINK_ROUTE,
  MY_DRINKS_ROUTE,
  FAVORITES_ROUTE,
} from 'constants/routes';

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationLink to={HOME_ROUTE}>Home</NavigationLink>
      <NavigationLink to={DRINKS_ROUTE}>Drinks</NavigationLink>
      <NavigationLink to={ADD_DRINK_ROUTE}>Add drink</NavigationLink>
      <NavigationLink to={MY_DRINKS_ROUTE}>My drinks</NavigationLink>
      <NavigationLink to={FAVORITES_ROUTE}>Favorites</NavigationLink>
    </StyledNavigation>
  );
};

export default Navigation;
