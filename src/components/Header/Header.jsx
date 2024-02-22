import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import TogglerTheme from '../TogglerTheme/TogglerTheme';
import UserLogo from '../UserLogo/UserLogo';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <div className="media-screen-wrapper">
        {/* <TogglerTheme /> */}
        <UserLogo />
        <BurgerMenu />
      </div>
    </StyledHeader>
  );
};

export default Header;
