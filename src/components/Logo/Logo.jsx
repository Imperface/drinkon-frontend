import { StyledLogoLink } from './Logo.styled';
import { HOME_ROUTE } from 'constants/routes';

const Logo = ({ className }) => {
  return (
    <StyledLogoLink to={HOME_ROUTE} className={className}>
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        fill="#fff"
      >
        <path d="M15.214 0H6.786L0 6.786v8.428L6.786 22h8.428L22 15.214V6.786L15.214 0zM7.952 15.32l-4.347-4.347 4.347-4.346c1.643-1.644 4.347-1.644 5.99 0l4.347 4.346-4.347 4.347c-1.643 1.644-4.294 1.644-5.99 0z" />
      </svg>
      <h3 className="logo-text">Drink Master</h3>
    </StyledLogoLink>
  );
};

export default Logo;
