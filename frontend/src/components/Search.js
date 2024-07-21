import '../css/search.css'
import SearchResults from './SearchResults'
import React, { useState } from 'react'

function Search() {
    const [textVal, setTextVal] = useState('');
    const [recipes, setrecipes] = useState([]);

    function onKeywordSubmitted(event) {
        event.preventDefault();
        console.log("textVal: " + textVal);

        fetch('/search?q=' + textVal)
            .then(res => res.json()
            .then(recipesarray => {
                if (res.status === 200) {
                    setrecipes(recipesarray);
                }
            }))
            .catch(err => {
                console.log(">>> Error fetching search result: " + err);
            });
    }

    function handleFocusEvent(event) {
        event.preventDefault();
        document.getElementById("_header-txt").style.display = "none";
    }

    function handleTxtChange(event) {
        setTextVal(event.target.value);
    }

    function onBtnClicked(event) {
        let ingredientIds = ["rice-btn", "chicken-btn", "beef-btn", "vegetable-btn", "pork-btn", "potato-btn", "sandwich-btn", "fish-btn"];

        for (const id of ingredientIds) {
            document.getElementById(id).parentElement.style.backgroundColor = "whitesmoke";
            document.getElementById(id).parentElement.style.boxShadow = "0.3em .2em .4em darkgrey";

            if (event.currentTarget.id === id) {
                document.getElementById(id).parentElement.style.backgroundColor = "gainsboro";
                document.getElementById(id).parentElement.style.boxShadow = "0.3em .2em .4em slategrey";
            }
        }

        if (event.currentTarget.id === "rice-btn") {
            setTextVal("rice");
        }

        if (event.currentTarget.id === "chicken-btn") {
            setTextVal("chicken");
        }

        if (event.currentTarget.id === "beef-btn") {
            setTextVal("beef");
        }

        if (event.currentTarget.id === "vegetable-btn") {
            setTextVal("vegetable");
        }

        if (event.currentTarget.id === "pork-btn") {
            setTextVal("pork");
        }

        if (event.currentTarget.id === "potato-btn") {
            setTextVal("potato");
        }

        if (event.currentTarget.id === "sandwich-btn") {
            setTextVal("sandwich");
        }

        if (event.currentTarget.id === "fish-btn") {
            setTextVal("fish");
        }
    }

    function dishTypesSetToActive(event) {
        let dishtypeIds = ["dinner-btn", "casserole-btn", "brunch-btn", "lunch-btn"];

        for (const id of dishtypeIds) {
            document.getElementById(id).parentElement.style.backgroundColor = "whitesmoke";
            document.getElementById(id).parentElement.style.boxShadow = "0.3em .2em .4em darkgrey";

            if (event.currentTarget.id === id) {
                document.getElementById(id).parentElement.style.backgroundColor = "gainsboro";
                document.getElementById(id).parentElement.style.boxShadow = "0.3em .2em .4em slategrey";
            }
        }
    }

    return (
        <div className="search-div">
            <div className="logo-image">
                <img src="/logo.png" alt="Recipes logo not available."/>
            </div>
            <div className="search-area">

                <form className="hidden-form" id="ingredient-form" action="/search" method="GET" onSubmit={onKeywordSubmitted}>
                    {/*<input type="text" onFocus={handleFocusEvent} placeholder="Search Recipes" name="q" onChange={handleTxtChange} value={textVal}/>*/}
                    {/*<input type="submit"/>*/}
                </form>
                <div className="title-grid">
                    <hr className="section-separator-line"></hr>
                    <h4 className="section-title"><b>Select Dish Type</b></h4>
                    <hr className="section-separator-line"></hr>
                </div>
                <div className="dish-cards-grid">
                    <div className="title-card">
                        <button type="button" id="dinner-btn" onFocus={handleFocusEvent} onClick={dishTypesSetToActive}> <h4><b>Dinner</b></h4> </button>
                    </div>
                    <div className="title-card">
                        <button type="button" id="casserole-btn" onFocus={handleFocusEvent} onClick={dishTypesSetToActive}> <h4><b>Casserole</b></h4> </button>
                    </div>
                    <div className="title-card">
                        <button type="button" id="brunch-btn" onFocus={handleFocusEvent} onClick={dishTypesSetToActive}> <h4><b>Brunch</b></h4> </button>
                    </div>
                    <div className="title-card">
                        <button type="button" id="lunch-btn" onFocus={handleFocusEvent} onClick={dishTypesSetToActive}> <h4><b>Lunch Set</b></h4> </button>
                    </div>
                </div>
                <div className="title-grid">
                    <hr className="section-separator-line"></hr>
                    <h4 className="section-title"><b>Select Ingredient</b></h4>
                    <hr className="section-separator-line"></hr>
                </div>
                <div className="recipe-cards-grid">
                    <div className="title-card">
                        <button type="submit" id="rice-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Rice</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="chicken-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Chicken</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="beef-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Beef</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="vegetable-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Vegetable</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="pork-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Pork</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="potato-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Potato</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="sandwich-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Sandwich</b></h4>
                        </button>
                    </div>
                    <div className="title-card">
                        <button type="submit" id="fish-btn" form="ingredient-form" onFocus={handleFocusEvent} onClick={onBtnClicked}>
                            <h4><b>Fish</b></h4>
                        </button>
                    </div>
                </div>

            </div>

            <div className="search-result">
                <SearchResults recipes={recipes}/>
            </div>
        </div>
    );
}

export default Search;