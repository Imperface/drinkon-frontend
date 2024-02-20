import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './Header.styled';
import {
  HOME_ROUTE,
  DRINKS_ROUTE,
  ADD_DRINK_ROUTE,
  MY_DRINKS_ROUTE,
  FAVORITES_ROUTE,
} from 'constants/routes';

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="header-nav">
        <NavLink className="nav-link" to={HOME_ROUTE}>
          Home
        </NavLink>
        <NavLink className="nav-link" to={DRINKS_ROUTE}>
          Drinks
        </NavLink>
        <NavLink className="nav-link" to={ADD_DRINK_ROUTE}>
          AddDrink
        </NavLink>
        <NavLink className="nav-link" to={MY_DRINKS_ROUTE}>
          MyDrinks
        </NavLink>
        <NavLink className="nav-link" to={FAVORITES_ROUTE}>
          Favorites
        </NavLink>
      </nav>
    </HeaderWrapper>
  );
};
