import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';

import UserLogo from '../UserLogo/UserLogo';
import { StyledHeader } from './Header.styled';
import OverlayHeader from '../OverlayHeader/OverlayHeader';
import TogglerTheme from '../TogglerTheme/TogglerTheme';
import { Navigation } from '../Navigation/Navigation';

import ModalDropDown from '../Modal/DropDown/ModalDropDown';
import ModalLogOut from '../Modal/LogOut/ModalLogOut';

const Header = () => {
  const [modalDropOpen, setModalDrop] = useState(false);
  const [modalLogOutOpen, setModalLogOut] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const onClickUser = (e) => {
    const click = e.currentTarget;
    if (click) {
      setModalDrop(!modalDropOpen);
    }
  };

  const toggleModal = (e) => {
    const clickPenBtn = e.currentTarget;
    if (clickPenBtn) {
      setModalDrop(!modalDropOpen);
      setModalLogOut(!modalLogOutOpen);
    }
  };

  const modalLogOutClose = () => {
    setModalLogOut(!modalLogOutOpen);
  };

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <div className="media-screen-wrapper">

         {/* <TogglerTheme /> */}
        <UserLogo onClickUser={onClickUser} />
        <ModalDropDown isOpenDrop={modalDropOpen} toggleModal={toggleModal} />
        <ModalLogOut
          isOpenLogOut={modalLogOutOpen}
          closeModal={modalLogOutClose}
        />

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
