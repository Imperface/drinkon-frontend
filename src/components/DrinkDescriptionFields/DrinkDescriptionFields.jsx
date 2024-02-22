import React, { useState } from 'react';
import Select from 'react-select';
import { DrinkStyle } from './DrinkDescriptionFields.styled';
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
         
               <form>
               <div className='image'>
               {/* <Input icon = {()=><Icon/>} type="file" accept="image/*" name='image'/> */}
               <input className = 'inputImg' type="file" accept="image/*" name='image'/>
               
               <label className='titleImg' htmlFor="image">Add image</label>
               </div> 
               
               <div>
               <label htmlFor="title">Enter item title</label>
                <input  type="text" name = 'title'/>
                <label htmlFor="aboutRecipe">Enter about recipe</label>
                <input type="text" name="aboutRecipe"/>
                <label htmlFor="category">Category</label>
            <select name='category'>
              {category.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor="glas">Glas</label>
                <select name = "glasses">
              {GLASSES.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
               </div>
               
               <div>
               <label htmlFor="alcoholic">Alcoholic</label>
            <input type="radio"  name='alcoholic' />
            <label htmlFor="nonAlcoholices">Non-alcoholic</label>
            <input type="radio" name = "nonAlcoholices" />
               </div>
           
                      
               </form>
              
                
         
        </DrinkStyle>
    )
    }

   
