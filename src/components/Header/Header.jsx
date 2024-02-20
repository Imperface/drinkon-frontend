import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import TogglerTheme from '../TogglerTheme/TogglerTheme';
import UserLogo from '../UserLogo/UserLogo';
import { HeaderStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
      <TogglerTheme />
      <UserLogo />
    </HeaderStyled>
  );
};

export default Header;
