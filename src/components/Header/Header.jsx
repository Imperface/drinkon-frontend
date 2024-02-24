import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import TogglerTheme from '../TogglerTheme/TogglerTheme';
import UserLogo from '../UserLogo/UserLogo';
import { StyledHeader } from './Header.styled';

import ModalDropDown from '../Modal/DropDown/ModalDropDown';
import ModalLogOut from '../Modal/LogOut/ModalLogOut';

import { useState } from 'react';

const Header = () => {
  const [modalDropOpen, setModalDrop] = useState(false);
  const [modalLogOutOpen, setModalLogOut] = useState(false);

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

  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <div className="media-screen-wrapper">
        {/* <TogglerTheme /> */}
        <UserLogo onClickUser={onClickUser} />
        <BurgerMenu />
      </div>
      <ModalDropDown isOpenDrop={modalDropOpen} toggleModal={toggleModal} />
      <ModalLogOut
        isOpenLogOut={modalLogOutOpen}
        closeModal={modalLogOutClose}
      />
    </StyledHeader>
  );
};

export default Header;
