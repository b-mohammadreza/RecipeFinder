import React, {useState} from 'react';
import '../css/searchResults.css';
import "./RecipeCard"
import RecipeCard from "./RecipeCard";

export function formatTime(duration) {
    if (!duration || duration === '') {
        return 'N/A'; // Return n/a string if the duration is empty
    }

    let hours = 0;
    let minutes = 0;

    if (duration.endsWith('H')) {
        hours = parseInt(duration.slice(2, -1), 10);
    } else if (duration.endsWith('M')) {
        minutes = parseInt(duration.slice(2, -1), 10);
    }

    // Convert hours to minutes
    minutes += hours * 60;

    // Format hours and minutes
    const formattedHours = Math.floor(minutes / 60).toString().padStart(2, '0');
    const formattedMinutes = (minutes % 60).toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

export const handleImageError = (event) => {
    event.target.src = '/silhouette.png'; // Set the source to the default image when an error occurs
};

function SearchResults({ recipes }) {
    const [recipe, setRecipe] = useState(null);
    function showRecipe(event, recipe) {
        event.preventDefault();
        setRecipe(recipe);

        let element = document.getElementById('search-results-div');
        element.style.display = 'none';

        element = document.getElementById('recipe-component');
        element.style.display = 'block';
    }

    return (
        <div>
            <RecipeCard recipe={recipe}></RecipeCard>
            <div id="search-results-div" className="search-results-div">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-tile">
                        <img src={recipe.image} onError={handleImageError} alt={recipe.name} />
                        <div className="recipe-details">
                            <h3><b>{recipe.name}</b></h3>
                            <p><b>Cook Time: </b>{formatTime(recipe.cookTime)}</p>
                            <p><b>Prep Time: </b>{formatTime(recipe.prepTime)}</p>
                        </div>
                        <div className="button-wrapper">
                            <div></div>
                            <button onClick={event => showRecipe(event, recipe)}>
                                <b>View Recipe</b>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
