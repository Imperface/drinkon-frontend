import Logo from '../Logo/Logo';
import { NavigationMobile } from '../Navigation/Navigation';
import { TogglerThemeMobile } from '../TogglerTheme/TogglerTheme';
import { StyledOverlayHeader } from './OverlayHeader.styled';

const OverlayHeader = ({ onClose, isOpen }) => {
  return (
    <StyledOverlayHeader isOpen={isOpen}>
      <div>
        <div className="overlay-head-container">
          <Logo />
          <div className="overlay-head-right-container">
            <TogglerThemeMobile />
            <button className="overlay-close-btn" onClick={onClose}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.5 9.5L9.5 28.5"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 9.5L28.5 28.5"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overlay-body-container">
          <NavigationMobile />
        </div>
      </div>
    </StyledOverlayHeader>
  );
};

export default OverlayHeader;
