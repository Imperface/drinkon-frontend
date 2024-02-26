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

  const getAge = (str) => {
    const dd = str.split('/').map(d => Number(d));
    const userBirthdate = new Date(dd[2], dd[1] - 1, dd[0], 0, 0, 0, 0);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - userBirthdate.getFullYear();
    const monthsPassed = currentDate.getMonth() - userBirthdate.getMonth();
    if (age < 18) 
    return true;
  }

  const isAdult = getAge(userDateOfBirth);

  const onImageChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setImageURL(fileURL);
    console.log(fileURL);
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

        <div className="radioBtnBlock">
          {isAdult ? (<label className="radioBtn1">
            <input
              className="textRadioBtn visually-hidden"
              type="radio"
              name="alcoholic"
              value="Alcoholic"
              disabled={true}
            />
            <span className="custom-radiobutton"></span>
            Alcoholic
          </label>
          ):(
          <label className="radioBtn">
            <input
              className="textRadioBtn visually-hidden"
              type="radio"
              name="alcoholic"
              value="Alcoholic"
              disabled= {false}
            />
            <span className="custom-radiobutton"></span>
            Alcoholic
          </label>
          )}
          

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
