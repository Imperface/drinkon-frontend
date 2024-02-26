import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { HomeListWrapper } from './HomeList.styled';
import hero from '../../images/heroImage/hero-desc@1x.png';
import { Link, NavLink } from 'react-router-dom';
import { getMainPageDrinksThunk } from '../../redux/drinks/operations';
import { selectMainPageDrinks } from '../../redux/drinks/selectors';

import { selectUserData } from '../../redux/users/selectors';

const HomeList = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const listResults = useSelector(selectMainPageDrinks);
  useEffect(() => {
    dispatch(getMainPageDrinksThunk());
  }, [dispatch]);

  return (
    <HomeListWrapper>
      <ul className="categoryList">
        {listResults.map((item) => (
          <li className="categoryItem" key={uuidv4()}>
            <h2 className="categoryTitleItem">{item._id}</h2>

            <ul className="drinkList">
              {item.drinks.map((result) => (
                <li className="drinkItem" key={uuidv4()}>
                  <img
                    src={result.drinkThumb}
                    alt="hero"
                    className="imgItem"
                    width="100%"
                    height="100%"
                  />
                  <div className="drinkAbout">
                    <h3 className="drinkTitleItem">{result.drink}</h3>
                    <Link className="linkId" to={`/drinks/${result._id}`}>
                      See more
                    </Link>
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
