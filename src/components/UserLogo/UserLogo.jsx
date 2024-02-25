import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/users/selectors';
import { StyledUserLogo } from './UserLogo.styled';

const UserLogo = ({ onClickUser }) => {
  const user = useSelector(selectUserData);
  return (
    <StyledUserLogo onClick={onClickUser}>
      {user.name && user.avatarURL && (
        <>
          <div className="user-logo-wrapper">
            <img
              src={user.avatarURL}
              alt="user avatar"
              style={{ width: '100%' }}
            />
          </div>
          <p className="user-logo-text">{user.name}</p>
        </>
      )}
    </StyledUserLogo>
  );
};

export default UserLogo;
