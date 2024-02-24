import React from "react";
import { useEffect, useState } from "react";
import { IngredientsStyle } from "./DrinkIngredientsFields.styled";
import { CgClose } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { selectFiltersIngredients } from "../../redux/filters/selectors";
import { getIngredientsThunk } from "../../redux/filters/operations";

export const DrinkIngredientsFields = () => {
  // const dispatch = useDispatch();
  // useEffect(()=>{dispatch(getIngredientsThunk())}, [dispatch])
  // const ingrediens = useSelector(selectFiltersIngredients);

  // console.log('ingrediens: ', ingrediens);

    const ingrediens = [
        'Beer Glass',
        'Parfait glass',
        'Mason jar',
        'Margarita glass',
        'Martini Glass',
        'Balloon Glass',
        'Coupe Glass',
      ];
    const [counter, setCounter] = useState(3);
    
    
    const handleIncrementProduct = () => {
    setCounter(prevState => prevState + 1);
  };

    const handleDecrementProduct = () => {
      if(counter <= 3) { return } setCounter(prevState => prevState - 1)
     };

  const changeInput = () => {
    Array.from({ length: counter }, ()=> {return <input key = {ingr}/>})
  };


    return (
        <IngredientsStyle>
          <div>
                <div className="title">
                <h3 className="text">Ingredients</h3>
                <div className="counter">
                    <button className="btnCounter" onClick={handleDecrementProduct}>
                        -
                    </button>
                    <span className="titleCounter">{ counter}</span>
                    <button className="btnCounter" onClick={handleIncrementProduct}>
                        +
                    </button>
                </div>
                </div>
            </div>
            <div className="listIngr">
            {Array.from({ length: 5 }, (v, k) => k)}
            {/* {changeInput()} */}

            {Array.from({ length: 3 }, ()=> {return <div className="ingredient">
                        <select className='inputStyle' name='ingredients'>
                        {ingrediens.map((item) => (
                        <option value={item} key={item}>
                        {item}
                        </option>
                        ))}</select>
                        <div className="quantity">
                        <input className="textQuantity" type="number" placeholder="1"/>
                        <span className="btnCounter">cl</span>
                        </div>
                        
                        <button className="btnDelet"><CgClose /></button>
                    </div> })}


                    {/* <div>
                        <select className='inputStyle' name='ingredients'>
                        {ingr.map((item) => (
                        <option value={item} key={item}>
                        {item}
                        </option>
                        ))}</select>
                        
                        <input type="number" placeholder="1"/>
                        <p>cl</p>
                        <button>x</button>
                    </div> */}
                    <div></div>
                    <div></div>
            </div>
            
    </IngredientsStyle>
    )
}


// function changeArray(arr) {
//     for( i = 0; i < arr.length; ++i) {
//         alert(arr[i]);
//     }
// }

