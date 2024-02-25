import { useState } from 'react';

import { SignupPageWrapper } from './Signup.styled';

import { NavLink } from 'react-router-dom';

import { Section } from 'components/Section/Section';

import calendar from '../../images/authComponents/calendar.svg';

import Calendar from '../../components/Calendar/Calendar.jsx';
import { signupThunk } from '../../redux/users/operations';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const userSignUp = {
      name: e.target.elements.userName.value,
      dateOfBirth: e.target.elements[1].value,
      email: e.target.elements.userEmail.value,
      password: e.target.elements.userPassword.value,
    };

    const { error, payload } = await dispatch(signupThunk(userSignUp));

    if (error) {
      Notify.failure(payload);
      return;
    }
    form.reset();
  };

  return (
    <SignupPageWrapper>
      <Section className="section">
        <div className="signup">
          <h2 className="signupTitle">Sign Up</h2>

          <form className="signupForm" onSubmit={onSubmit}>
            <label>
              <input
                type="text"
                name="userName"
                className="inputSignup"
                placeholder="Name"
                required
              />
            </label>

            <div className="inputWithIcon">
              <img
                src={calendar}
                alt="calendar"
                className="calendarIcon"
                width={20}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
              />

              <Calendar />
            </div>

            <label>
              <input
                type="email"
                placeholder="Email"
                className="inputSignup"
                required
                name="userEmail"
              />
            </label>

            <label>
              <input
                type="password"
                className="inputSignup"
                placeholder="Password"
                required
                name="userPassword"
                minLength={6}
              />
            </label>

            <button type="submit" className="buttonSignup">
              Sign Up
            </button>

            <NavLink className="link" to="/signin">
              Sign In
            </NavLink>
          </form>
        </div>
      </Section>
    </SignupPageWrapper>
  );
};

export default Signup;
