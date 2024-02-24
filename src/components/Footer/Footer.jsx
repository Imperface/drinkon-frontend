import SubscribeForm from '../Forms/SubscribeForm/SubscribeForm';
import { FooterWrapper } from './Footer.styled';
import FooterCopyright from './FooterCopyright/FooterCopyright';
import { FollowUs } from 'components/FollowUs/FollowUs';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import {
  DRINKS_ROUTE,
  ADD_DRINK_ROUTE,
  MY_DRINKS_ROUTE,
  FAVORITES_ROUTE,
} from 'constants/routes';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="aboutUs">
          <div className="aboutUsInfo">
            <Logo className="aboutUsInfoLogo" />
            <FollowUs />
          </div>

          <ul className="footerNav">
            <li className="navItem">
              <Link to={DRINKS_ROUTE}>Drinks</Link>
            </li>
            <li className="navItem">
              <Link to={ADD_DRINK_ROUTE}>Add drink</Link>
            </li>
            <li className="navItem">
              <Link to={MY_DRINKS_ROUTE}>My drinks</Link>
            </li>
            <li className="navItem">
              <Link to={FAVORITES_ROUTE}>Favorites drinks</Link>
            </li>
          </ul>
        </div>
        <SubscribeForm />
        <FooterCopyright />
      </div>
    </FooterWrapper>
  );
};
