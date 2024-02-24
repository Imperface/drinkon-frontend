import { ButtonWrapper } from './LogoutButton.styled';

import { useDispatch } from 'react-redux';
import { signoutThunk } from '../../redux/users/operations';
import { Notify } from 'notiflix';

const LogoutButton = ({ classNameButton, closingSignal }) => {
  const dispatch = useDispatch();

  const onClick = async () => {
    try {
      const { error, payload } = await dispatch(signoutThunk());
      if (error) {
        Notify.failure(payload);
        return;
      }
      closingSignal();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <ButtonWrapper onClick={onClick} className={classNameButton}>
      Log out
    </ButtonWrapper>
  );
};

export default LogoutButton;
