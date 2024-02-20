import { WelcomePageWrapper, NavLink } from './Welcome.styled';

const Welcome = () => {
  return (
    <WelcomePageWrapper>
      <section>
        <div>
          <h2>Welcome to the app!</h2>
          <p>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
        </div>

        <div>
          <NavLink state={{ from: location }} to="/signup">
            Sign Up
          </NavLink>
          <NavLink state={{ from: location }} to="/signin">
            Sign In
          </NavLink>
        </div>
      </section>
    </WelcomePageWrapper>
  );
};
export default Welcome;
