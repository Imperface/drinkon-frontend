import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';

import UserLogo from '../UserLogo/UserLogo';
import { StyledHeader } from './Header.styled';
import OverlayHeader from '../OverlayHeader/OverlayHeader';
import TogglerTheme from '../TogglerTheme/TogglerTheme';
import { Navigation } from '../Navigation/Navigation';

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <div className="media-screen-wrapper">
        {/* <TogglerTheme /> */}
        <UserLogo />
        <BurgerMenu onClick={toggleOverlay} />
      </div>
      <OverlayHeader
        onClose={toggleOverlay}
        isOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
    </StyledHeader>
  );
};

export default Header;
