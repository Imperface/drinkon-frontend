import { WELCOME_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsSignIn } from '../../redux/users/selectors';

export const PrivateRoute = ({ children, navigateTo = WELCOME_ROUTE }) => {
  const isLogin = useSelector(selectUserIsSignIn);
  return isLogin ? children : <Navigate to={navigateTo} replace />;
};
