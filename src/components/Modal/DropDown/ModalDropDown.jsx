import { ModalWrapperDrop } from './ModalDropDown.styled';

import { LuPen } from 'react-icons/lu';

const ModalDropDown = ({
  isOpenDrop: isOpen,
  toggleModal,
  isOpenUserUpdate,
}) => {
  return (
    <>
      {isOpen && (
        <ModalWrapperDrop>
          <div className="wrapper-text">
            <p>Edit profile</p>
            <button
              className="button-edit"
              onClick={isOpenUserUpdate}
              type="button"
            >
              <LuPen className="pen" />
            </button>
          </div>
          <button className="btn-log-out" onClick={toggleModal} type="button">
            Log out
          </button>
        </ModalWrapperDrop>
      )}
    </>
  );
};

export default ModalDropDown;
