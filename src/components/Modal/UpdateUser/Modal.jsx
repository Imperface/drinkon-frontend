import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/users/selectors';

import { updateUserThunk } from '../../../redux/users/operations';

import { BackDrop } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { LuPen } from 'react-icons/lu';

import { Notify } from 'notiflix';

export const ModalUserUpdate = ({ isOpen: isOpenModal, isClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const [inputName, setInputName] = useState(user.name);
  let avatarURLUSer = user.avatarURL;
  const [photo, setPhoto] = useState(avatarURLUSer);

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
  }, [isClose, isOpenModal, photo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const form = e.target;
    formData.append('name', form.elements.name.value);
    formData.append('avatarURL', form.elements.avatar.files[0]);
    const { error, payload } = await dispatch(updateUserThunk(formData));

    if (error) {
      Notify.failure(payload);
      return;
    }
    if (payload) {
      setPhoto(payload.avatarURL);
      isClose();
    }
    isClose();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPhoto(url);
    }
  };

  const clickOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      isClose();
    }
  };
  return (
    <>
      {isOpenModal && (
        <BackDrop onClick={clickOnOverlay}>
          <div className="wrapper-modal">
            <button onClick={isClose} className="button-close">
              <IoCloseOutline className="icon-close" />
            </button>

            <form className="form" onSubmit={handleSubmit}>
              <div className="wrapper-img-inp">
                <input
                  type="file"
                  id="avatar"
                  accept=".jpg, .jpeg, .png"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="avatar" className="custom-upload-label">
                  <img className="img-user" src={photo} alt="" />
                  <span className="supun-plus">
                    <FaPlus className="plus" />
                  </span>
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
    </>
  );
};
