import { SigninPageWrapper } from './Signin.styled';

import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';

const Signin = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    form.reset();
  };

  return (
    <SigninPageWrapper>
      <Section className="section">
        <div className="signin">
          <h2 className="signinTitle">Sign In</h2>

          <form className="signinForm" onSubmit={onSubmit}>
            <label>
              <input
                type="email"
                placeholder="Email"
                className="inputSignin"
                required
                name="userEmail"
              />
            </label>

            <label>
              <input
                type="password"
                className="inputSignin"
                placeholder="Password"
                required
                name="userPassword"
                minLength={6}
              />
            </label>

            <button type="submit" className="buttonSignin">
              Sign In
            </button>
          </form>

          <NavLink className="link" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </Section>
    </SigninPageWrapper>
  );
};

export default Signin;
