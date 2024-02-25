import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { updateUser } from '../../redux/auth/operations';
import UserLogo from '../UserLogo/UserLogo';
import { Modal, CloseBtn, NameInput, SaveBtn, PhotoWrapper, AddBtn, Photo, Form, ImgInput, BackDrop } from './Modal.styled';
import sprite from './sprite.svg';
import userLogoImg from '../../images/userInfoModal/userAvatar.svg';
import ModalDropDown from './ModalDropDown';

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [inputName, setInputName] = useState(user.name);
  const [photo, setPhoto] = useState(user.avatar);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const avatar = e.target.elements.avatar.files[0];
    dispatch(updateUser({ name, avatar }));
    closeModal();
  };

  const handlePhoto = (e) => {
    const avatar = e.target.files[0];
    const avatarURL = URL.createObjectURL(avatar);
    setPhoto(avatarURL);
  };

  return (
    <>
      <div onClick={toggleMenu}>
        <UserLogo />
      </div>
      <BackDrop open={isOpen} onClick={toggleMenu} />
      <Modal open={isOpen}>
        <CloseBtn onClick={closeModal}>
          <svg width="18px" height="18px" stroke="#F3F3F3">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseBtn>
        <Form onSubmit={handleSubmit}>
          <Photo>
            <PhotoWrapper>
              <img width="100" height="100" src={photo || userLogoImg} alt="User avatar" onError={(event) => {
                event.currentTarget.src = userLogoImg;
              }} />
            </PhotoWrapper>
            <AddBtn htmlFor="avatar">
              <svg width="34px" height="34px">
                <use href={`${sprite}#icon-add`} />
              </svg>
              <ImgInput type="file" name="avatar" id='avatar' accept=".jpg, .jpeg, .png" onChange={handlePhoto} />
            </AddBtn>
          </Photo>
          <NameInput
            type="text"
            name="name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <SaveBtn type='submit'>Save changes</SaveBtn>
        </Form>
      </Modal>
      <ModalDropDown isOpenDrop={isOpen} handleClickEdit={toggleMenu} />
    </>
  );
};
