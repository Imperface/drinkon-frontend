import React, { useState } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { DrinkStyle } from './DrinkDescriptionFields.styled';
import { useFormik } from 'formik';
import { HiPlusSmall } from "react-icons/hi2";
import { selectFiltersCategories } from '../../redux/filters/selectors';

export const DrinkDescriptionFields = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const category = useSelector(selectFiltersCategories);
  console.log('category: ', category);
    const GLASSES = [
        'Beer Glass',
        'Parfait glass',
        'Mason jar',
        'Margarita glass',
        'Martini Glass',
        'Balloon Glass',
        'Coupe Glass',
      ];
    // const category = [
    //             'Homemade Liqueur',
    //     'Punch/Party Drink',
    //     'Beer',
    //     'Soft Drink',
    //   ];
     const dateOfBirth = 18;
      const changeRadio = () => {if (dateOfBirth < 18)
        setIsButtonDisabled(true);
      };
      
    return (
        <DrinkStyle>
         
    <div className='addAvatar'>
      <div className='avatar'> <HiPlusSmall className='icon'/>
      <input  type="file" name="drinkAvatar" />  
       <label className='titleAvatar' htmlFor="file">Add image</label>
      </div>
    </div>
                  

    <div className='formDescription'>
      
      <label className='label' htmlFor="drink">Enter item title
      <input className='inputStyle' type="text" name='drink' />
      </label>
          
      
          

          <label className='label'>Enter about recipe
            <input className='inputStyle' type="text" name="shortDescription" />
          </label>
                

          <label className='label'>Category
           <select className='inputStyle' name='category'>
              {category.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
           

          <label className='label'>Glass
             <select className='inputStyle' name = "glass">
              {GLASSES.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
               
    </div>
               
               <div>
                {changeRadio()}
                <input className='textRadioBtn' type="radio" name='alcoholic' value="Alcoholic" disabled={isButtonDisabled}/>
          <label className='radioBtn'>
            Alcoholic
          </label>
           
          <input className='textRadioBtn' type="radio" name="alcoholic" value="Non alcoholic"/>
          <label className='radioBtn'>
            Non-alcoholic
          </label>
            
               </div>
           
                      
              
                
         
        </DrinkStyle>
    )
    }

   
