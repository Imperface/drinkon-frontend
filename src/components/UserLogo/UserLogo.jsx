import { StyledUserLogo } from './UserLogo.styled';

const UserLogo = () => {
  return (
    <StyledUserLogo>
      <div className="user-logo-wrapper">
        <img width="44" height="44" src="" alt="User avatar" />
      </div>
      <p className="user-logo-text">User</p>
    </StyledUserLogo>
  );
};

export default UserLogo;
