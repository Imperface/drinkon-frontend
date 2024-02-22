import { RecipeStyle } from "./RecipePreparation.styled"

export const RecipePreparation =() => {
    return (
        <RecipeStyle>
            <label className="label">Recipe Preparation
                <textarea className="recipe" placeholder="Enter the recipe" name="instructions" />
            </label>
        
        </RecipeStyle>
    )
}