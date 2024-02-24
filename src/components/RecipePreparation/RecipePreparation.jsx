import { RecipeStyle } from "./RecipePreparation.styled"

export const RecipePreparation =() => {
    return (
        <RecipeStyle>
            <label className="label" htmlFor="drink">Recipe Preparation
               
            </label>
            <textarea className="recipe" placeholder="Enter the recipe" name="instructions" />
        
        </RecipeStyle>
    )
}