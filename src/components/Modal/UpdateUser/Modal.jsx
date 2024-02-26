import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/users/selectors';

import { updateUserThunk } from '../../../redux/users/operations';

// import UserLogo from '../../UserLogo/UserLogo';

import { BackDrop } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { LuPen } from 'react-icons/lu';

import { Notify } from 'notiflix';

// import userLogoImg from '../../images/userInfoModal/userAvatar.svg';
// import ModalDropDown from './ModalDropDown';

export const ModalUserUpdate = ({ isOpen: isOpenModal, isClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const [inputName, setInputName] = useState(user.name);
  const [photo, setPhoto] = useState(user.avatarURL);

  useEffect(() => {
    if (isOpenModal) {
      const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
          isClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isClose, isOpenModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const avatar = e.target.elements.avatar.files[0];
    const { error, payload } = await dispatch(
      updateUserThunk({ name, avatar })
    );
    if (error) {
      Notify.failure(payload);
      return;
    }
    setPhoto(avatar);
    isClose();
    // e.target.reset();
  };

  const clickOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      isClose();
      console.log(e.code);
    }
  };
  // const handlePhoto = (e) => {
  //   const avatar = e.target.files[0];
  //   const avatarURL = URL.createObjectURL(avatar);
  //   setPhoto(avatarURL);
  // };

  return (
    <>
      {isOpenModal && (
        <BackDrop onClick={clickOnOverlay}>
          <div className="wrapper-modal">
            <button onClick={isClose} className="button-close">
              <IoCloseOutline className="icon-close" />
            </button>
            {/* <UserLogo /> */}
            <form className="form" onSubmit={handleSubmit}>
              <div className="wrapper-img-inp">
                {/* <input
                  className="wrapper-photo"
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept=".jpg, .jpeg, .png"
                  onChange={handlePhoto}
                /> */}
                <input
                  type="file"
                  id="avatar"
                  accept=".jpg, .jpeg, .png"
                  // onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <label htmlFor="avatar" className="custom-upload-label">
                  <img className="img-user" src={photo} alt="" />
                </label>
              </div>

              <label className="label-text">
                <input
                  className="name-user"
                  type="text"
                  name="name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />
                <LuPen className="pen-input" />
              </label>

              <button className="btn-submit" type="submit">
                Save changes
              </button>
            </form>
          </div>
        </BackDrop>
      )}
      {/* <div onClick={toggleMenu}>
        <UserLogo />
      </div>
      <BackDrop open={isOpen} onClick={toggleMenu} />
      <Modal open={isOpen}>
        <CloseBtn onClick={closeModal}> */}
      {/* <svg width="18px" height="18px" stroke="#F3F3F3">
            <use href={`${sprite}#icon-close`} />
          </svg> */}
      {/* <IoCloseOutline />
        </CloseBtn>
        <Form onSubmit={handleSubmit}>
          <Photo>
            <PhotoWrapper>
              <img
                width="100"
                height="100"
                src={photo}
                alt="User avatar"
                onError={(event) => {
                  event.currentTarget.src = photo;
                }}
              />
            </PhotoWrapper>
            <AddBtn htmlFor="avatar"> */}
      {/* <svg width="34px" height="34px">
                <use href={`${sprite}#icon-add`} />
              </svg> */}
      {/* <ImgInput
                type="file"
                name="avatar"
                id="avatar"
                accept=".jpg, .jpeg, .png"
                onChange={handlePhoto}
              />
            </AddBtn>
          </Photo>
          <NameInput
            type="text"
            name="name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <SaveBtn type="submit">Save changes</SaveBtn>
        </Form>
      </Modal> */}
      {/* <ModalDropDown isOpenDrop={isOpen} handleClickEdit={toggleMenu} /> */}
    </>
  );
};
