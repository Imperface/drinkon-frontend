import { NavLink } from 'react-router-dom';
import { StyledNavigation, StyledNavigationMobile } from './Navigation.styled';
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
      <NavLink className="navigation-link" to={HOME_ROUTE}>
        Home
      </NavLink>
      <NavLink className="navigation-link" to={DRINKS_ROUTE}>
        Drinks
      </NavLink>
      <NavLink className="navigation-link" to={ADD_DRINK_ROUTE}>
        Add drink
      </NavLink>
      <NavLink className="navigation-link" to={MY_DRINKS_ROUTE}>
        My drinks
      </NavLink>
      <NavLink className="navigation-link" to={FAVORITES_ROUTE}>
        Favorites
      </NavLink>
    </StyledNavigation>
  );
};

export const NavigationMobile = () => {
  return (
    <StyledNavigationMobile>
      <NavLink className="navigation-link" to={HOME_ROUTE}>
        Home
      </NavLink>
      <NavLink className="navigation-link" to={DRINKS_ROUTE}>
        Drinks
      </NavLink>
      <NavLink className="navigation-link" to={ADD_DRINK_ROUTE}>
        Add drink
      </NavLink>
      <NavLink className="navigation-link" to={MY_DRINKS_ROUTE}>
        My drinks
      </NavLink>
      <NavLink className="navigation-link" to={FAVORITES_ROUTE}>
        Favorites
      </NavLink>
    </StyledNavigationMobile>
  );
};
