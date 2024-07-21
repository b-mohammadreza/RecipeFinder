import "../css/recipeCard.css"
import { formatTime, handleImageError } from "./SearchResults"
function RecipeCard({recipe}) {
    if (recipe !== null) {
        return (
            <card id="recipe-component" className="recipe-content">
                <div className="recipe-top-area">
                    <div className="left-area"></div>
                    <button className="close-btn" onClick={
                        event => {
                            event.preventDefault();

                            let element = document.getElementById('recipe-component');
                            element.style.display = "none";

                            element = document.getElementById('search-results-div');
                            element.style.display = 'flex';
                        }
                    }>
                        x
                    </button>
                </div>
                <div className="recipe">
                    <div className="recipe-image-container">
                        <img className="recipe-image" src={recipe.image} onError={handleImageError} alt={recipe.name}/>
                    </div>
                    <div>
                        <h3 className="recipe-header-title"><b>{recipe.name}</b></h3>
                        <p className="recipe-header"><b>Cook Time: </b>{formatTime(recipe.cookTime)}</p>
                        <p className="recipe-header"><b>Prep Time: </b>{formatTime(recipe.prepTime)}</p>
                        <p>{recipe.description}</p>
                    </div>
                    <div>
                        <p className="ingredient-title"><h3><b>Ingredients</b></h3></p>
                        <hr className="separator-line"></hr>
                    </div>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} > {ingredient} </li>
                        ))}
                    </ul>
                </div>
            </card>
        );
    } else {
        return (
            <card id="recipe-component" className="recipe-content">
            </card>
        );
    }
}

export default RecipeCard;
