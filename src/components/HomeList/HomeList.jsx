import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

import { HomeListWrapper } from './HomeList.styled';
import hero from '../../images/heroImage/hero-desc@1x.png';
import { NavLink } from 'react-router-dom';
import { getMainPageDrinksThunk } from '../../redux/drinks/operations';
import { selectMainPageDrinks } from '../../redux/drinks/selectors';

// import { signupThunk } from '../../redux/users/operations';
import { selectUserData } from '../../redux/users/selectors';

const HomeList = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const listResults = useSelector(selectMainPageDrinks);
  console.log(listResults);

  // const userDateOfBirth = new Date(user.dateOfBirth);
  // const today = new Date();
  // const ageDifference = today.getFullYear() - userDateOfBirth.getFullYear();

  // const isAdult = ageDifference >= 18;
  // const isMinor = !isAdult;
  // console.log(user);
  // console.log('isAdult:', isAdult);
  // console.log('isMinor:', isMinor);

  useEffect(() => {
    dispatch(getMainPageDrinksThunk());
  }, [dispatch]);

  return (
    <HomeListWrapper>
      <ul className="categoryList">
        {listResults.map((item) => (
          <li className="categoryItem" key={item._id}>
            <h2 className="categoryTitleItem">{item._id}</h2>

            <ul className="drinkList">
              {item.drinks.map((result) => (
                <li className="drinkItem" key={result.id}>
                  <img
                    src={result.drinkThumb}
                    alt="hero"
                    className="imgItem"
                    width="100%"
                    height="100%"
                  />
                  <div className="drinkAbout">
                    <h3 className="drinkTitleItem">{result.drink}</h3>
                    <NavLink className="linkId" to="/drink/:drinkId">
                      See more
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </HomeListWrapper>
  );
};
export default HomeList;
