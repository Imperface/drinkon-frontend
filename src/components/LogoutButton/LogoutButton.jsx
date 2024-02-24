import { ButtonWrapper } from './LogoutButton.styled';

import { useDispatch } from 'react-redux';
import { signoutThunk } from '../../redux/users/operations';
import { selectUserData } from '../../redux/users/selectors';
import { Notify } from 'notiflix';

import { useSelector } from 'react-redux';

const LogoutButton = ({ classNameButton, closingSignal }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectUserData);

  const options = { _id: data._id };

  const onClick = async () => {
    try {
      const { error, payload } = await dispatch(signoutThunk(options));
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
