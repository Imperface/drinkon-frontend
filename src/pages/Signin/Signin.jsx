import { SigninPageWrapper } from './Signin.styled';

import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { signinThunk } from '../../redux/users/operations';
import { Notify } from 'notiflix';

const Signin = () => {
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const userSignIn = {
      email: e.target.elements.userEmail.value,
      password: e.target.elements.userPassword.value,
    };

    const { error, payload } = await dispatch(signinThunk(userSignIn));

    if (error) {
      Notify.failure(payload);
      return;
    }
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
            <NavLink className="link" to="/signup">
              Sign Up
            </NavLink>
          </form>
        </div>
      </Section>
    </SigninPageWrapper>
  );
};

export default Signin;
