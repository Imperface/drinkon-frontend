import { OverlayLogOut } from './ModalLogOut.styled';

import { IoCloseOutline } from 'react-icons/io5';
import LogoutButton from '../../LogoutButton/LogoutButton';

const ModalLogOut = ({ isOpenLogOut, closeModal }) => {
  const clickOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      {isOpenLogOut && (
        <OverlayLogOut onClick={clickOnOverlay}>
          <div className="modalLogOut">
            <div>
              <button className="button-close">
                <IoCloseOutline className="close" />
              </button>

              <p className="text-modal">Are you sure you want to log out?</p>
              <ul className="list-button">
                <li>
                  <LogoutButton
                    closingSignal={closeModal}
                    classNameButton={'log-out-btn2'}
                  />
                </li>
                <li>
                  <button
                    onClick={closeModal}
                    className="button-cancel"
                    type="button"
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </OverlayLogOut>
      )}
    </>
  );
};

export default ModalLogOut;
