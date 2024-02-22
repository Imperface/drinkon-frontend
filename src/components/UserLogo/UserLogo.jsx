import { StyledUserLogo } from './UserLogo.styled';

const UserLogo = () => {
  return (
    <StyledUserLogo>
      <div className="user-logo-wrapper">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#161F37" />
          <circle cx="22" cy="22" r="22" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use transform="translate(-0.258192) scale(0.00123369)" />
            </pattern>
            <image id="image0_11829_1606" width="1280" height="854" />
          </defs>
        </svg>
      </div>
      <p className="user-logo-text">User</p>
    </StyledUserLogo>
  );
};

export default UserLogo;
