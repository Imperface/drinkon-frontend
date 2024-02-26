import { ModalWrapperDrop } from './ModalDropDown.styled';
import { useEffect } from 'react';
import { LuPen } from 'react-icons/lu';

const ModalDropDown = ({
  isOpenDrop,
  toggleModal,
  isOpenUserUpdate,
  closeDropDown,
}) => {
  useEffect(() => {
    if (isOpenDrop) {
      const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
          closeDropDown();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpenDrop, closeDropDown]);

  const onClickPen = () => {
    closeDropDown();
    isOpenUserUpdate();
  };

  const clickOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeDropDown();
    }
  };

  return (
    <>
      {isOpenDrop && (
        <ModalWrapperDrop onClick={clickOnOverlay}>
          <div className="overlay-drop-modal">
            <div className="wrapper-text">
              <p>Edit profile</p>
              <button
                className="button-edit"
                onClick={onClickPen}
                type="button"
              >
                <LuPen className="pen" />
              </button>
            </div>
            <button className="btn-log-out" onClick={toggleModal} type="button">
              Log out
            </button>
          </div>
        </ModalWrapperDrop>
      )}
    </>
  );
};

export default ModalDropDown;
