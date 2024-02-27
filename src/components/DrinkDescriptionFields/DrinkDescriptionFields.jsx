import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { DrinkStyle } from './DrinkDescriptionFields.styled';
import { HiPlusSmall } from 'react-icons/hi2';
import {
  selectFiltersCategories,
  selectFiltersGlasses,
} from '../../redux/filters/selectors';
import {
  getCategoryThunk,
  getGlassesThunk,
} from '../../redux/filters/operations';
import { selectUserData } from '../../redux/users/selectors';

export const DrinkDescriptionFields = ({ imageURL, setImageURL }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryThunk());
    dispatch(getGlassesThunk());
  }, [dispatch]);

  const categories = useSelector(selectFiltersCategories);
  const glasses = useSelector(selectFiltersGlasses);

  const getCategoryOptions = () => {
    if (!categories) {
      return;
    }
    const categoryOptions = categories.map((item) => ({
      value: item,
      label: item,
    }));
    return categoryOptions;
  };

  const getGlassesOptions = () => {
    if (!glasses) {
      return;
    }
    const glassesOptions = glasses.map((item) => ({
      value: item,
      label: item,
    }));
    return glassesOptions;
  };

  const user = useSelector(selectUserData);
  const userDateOfBirth = user.dateOfBirth;

  const isAdult = () => {
    // get day, month, year from params
    let [day, month, year] = user.dateOfBirth.split('/');

    // transform vars to number
    day = Number(day);
    month = Number(month);
    year = Number(year);

    // get date
    const today = new Date();
    const userBirth = new Date(year, month - 1, day);

    // get years
    let age = today.getFullYear() - userBirth.getFullYear();

    // get month
    const m = today.getMonth() - userBirth.getMonth();

    // decrement year if today month < userBirth month or month < 0
    if (m < 0 || (m === 0 && today.getDate() < userBirth.getDate())) {
      age--;
    }

    if (age < 18) {
      return false;
    }
    return true;
  };

  const onImageChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setImageURL(fileURL);
  };

  return (
    <DrinkStyle>
      <div className="addAvatar">
        {imageURL && (
          <img
            src={`${imageURL}`}
            style={{
              zIndex: 2,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        <div className="avatar">
          <HiPlusSmall className="icon" />
          <input
            type="file"
            name="drinkAvatar"
            onChange={onImageChange}
            required
          />
          <label className="titleAvatar" id="file">
            Add image
          </label>
        </div>
      </div>

      <div className="formDescription">
        <label className="label">
          Enter item title
          <input className="inputStyle" type="text" name="drink" required />
        </label>

        <label className="label">
          Enter about recipe
          <input
            className="inputStyle"
            type="text"
            name="shortDescription"
            required
          />
        </label>

        <label className="label">
          Category
          <Select
            name="category"
            options={getCategoryOptions()}
            classNamePrefix="react-select"
            placeholder="select a category"
            required
          />
        </label>

        <label className="label">
          Glass
          <Select
            name="glass"
            options={getGlassesOptions()}
            classNamePrefix="react-select"
            placeholder="select a glass"
            required
          />
        </label>

        {user && (
          <div className="radioBtnBlock">
            <label className={`radioBtn ${!isAdult() ? 'alcoholicBlock' : ''}`}>
              <input
                className="textRadioBtn visually-hidden"
                type="radio"
                name="alcoholic"
                value="Alcoholic"
                disabled={!isAdult()}
              />
              <span className="custom-radiobutton"></span>
              Alcoholic
            </label>

            <label className="radioBtn">
              <input
                className="textRadioBtn"
                type="radio"
                name="alcoholic"
                defaultChecked="true"
                value="Non alcoholic"
              />
              <span className="custom-radiobutton"></span>
              Non-alcoholic
            </label>
          </div>
        )}
      </div>
    </DrinkStyle>
  );
};
