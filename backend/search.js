const mongoose = require('mongoose')
const recipesModel = require('./recipesSchema').recipesModel

function addRecipe(recipes, recipe) {
    let found = false;
    recipes.forEach(item => {
       if (item.name === recipe.name) {
           found = true;
       }
    });

    if (found === false) {
        recipes.push(recipe);
    }
}

function searchHandler(req, res) {
    console.log(">>>> Search - request received: ");
    if (Object.keys(req.query).length === 0) {
        return;
    }

    mongoose.connect('mongodb://localhost/recipes-group-2')
        .then(
            async () => {
                console.log(">>>> Search - Connected to database");
                const keyword = req.query.q;
                let recipes = [];
                let result = []

                try {
                    result = await recipesModel.find({name: {$regex: keyword, $options: 'i'}}, null, null).exec();
                    Array.from(result).forEach(item => {addRecipe(recipes, item)})
                } catch(err) {
                    console.log(">>>> Search - find query on 'name' failed: " + err)
                }

                try {
                    result = await recipesModel.find({description : {$regex: keyword, $options:'i'}}, null, null).exec();
                    Array.from(result).forEach(item => {addRecipe(recipes, item)})
                } catch(err) {
                    console.log(">>>> Search - find query on 'description' failed: " + err)
                }

                try {
                    result = await recipesModel.find({ingredients : {$regex: keyword, $options:'i'}}, null, null).exec()
                    Array.from(result).forEach(item => {addRecipe(recipes, item)})
                } catch(err) {
                    console.log(">>>> Search - find query on 'ingredients' failed: " + err)
                }

                console.log(">>>> Search - recipes len: " + recipes.length)
                res.json(recipes);
            })
        .catch(err => {
            console.log(">>>> Search - MongoDB connect: " + err)
        });
}

module.exports.searchHandler = searchHandler;