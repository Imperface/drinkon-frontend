import React, { useState } from 'react';
import Select from 'react-select';
import { DrinkStyle } from './DrinkDescriptionFields.styled';
import { useFormik } from 'formik';
import { Input } from './input';
import {ReactComponent as Icon} from "../../images/addDrink/plus.svg"

export const DrinkDescriptionFields = () => {
    const GLASSES = [
        'Beer Glass',
        'Parfait glass',
        'Mason jar',
        'Margarita glass',
        'Martini Glass',
        'Balloon Glass',
        'Coupe Glass',
      ];
    const category = [
                'Homemade Liqueur',
        'Punch/Party Drink',
        'Beer',
        'Soft Drink',
      ];
     
      
      
    return (
        <DrinkStyle>
         
    <div className='addAvatar'>
       <input  type="file" name="drinkAvatar" />  
       <label className='titleAvatar' htmlFor="file">Add image</label>
    </div>
                  

    <div className='formDescription'>
          <label className='label'>Enter item title
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
               <label htmlFor="alcoholic">Alcoholic</label>
            <input type="radio"  name='alcoholic' />
            <label htmlFor="nonAlcoholices">Non-alcoholic</label>
            <input type="radio" name = "alcoholic" />
               </div>
           
                      
              
                
         
        </DrinkStyle>
    )
    }

   
