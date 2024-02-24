import { HOME_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsSignIn } from '../../redux/users/selectors';

export const RestrictedRoute = ({ children, navigateTo = HOME_ROUTE }) => {
  const isLogin = useSelector(selectUserIsSignIn);
  return isLogin ? <Navigate to={navigateTo} replace={true} /> : children;
};
