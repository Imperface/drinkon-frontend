import { WelcomePageWrapper } from './Welcome.styled';

import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';

const Welcome = () => {
  return (
    <WelcomePageWrapper>
      <Section className="welcome">
        <div className="welcome-info">
          <h2 className="welcome-title">Welcome to the app!</h2>
          <p className="welcome-text">
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>

          <div className="welcome-link-block">
            <NavLink className="welcome-link link-signup" to="/signup">
              Sign Up
            </NavLink>
            <NavLink className="welcome-link link-signin" to="/signin">
              Sign In
            </NavLink>
          </div>
        </div>
      </Section>
    </WelcomePageWrapper>
  );
};
export default Welcome;
