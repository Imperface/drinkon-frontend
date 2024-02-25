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

export const DrinkDescriptionFields = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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

  return (
    <DrinkStyle>
      <div className="addAvatar">
        <div className="avatar">
          <HiPlusSmall className="icon" />
          <input type="file" name="drinkAvatar" />
          <label className="titleAvatar" id="file">
            Add image
          </label>
        </div>
      </div>

      <div className="formDescription">
        <label className="label">
          Enter item title
          <input className="inputStyle" type="text" name="drink" />
        </label>

        <label className="label">
          Enter about recipe
          <input className="inputStyle" type="text" name="shortDescription" />
        </label>

        <label className="label">
          Category
          <Select
            options={getCategoryOptions()}
            classNamePrefix="react-select"
            placeholder="select a category"
          />
        </label>

        <label className="label">
          Glass
          <Select
            options={getGlassesOptions()}
            classNamePrefix="react-select"
            placeholder="select a glass"
          />
        </label>

        <div className="radioBtnBlock">
          <label className="radioBtn">
            <input
              className="textRadioBtn visually-hidden"
              type="radio"
              name="alcoholic"
              value="Alcoholic"
              disabled={isButtonDisabled}
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
      </div>
    </DrinkStyle>
  );
};
