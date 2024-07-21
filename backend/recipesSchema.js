const mongoose = require('mongoose');

let recipesSchema = new mongoose.Schema ({
        name: String,
        description: String,
        image: String,
        cookTime: String,
        prepTime: String,
        ingredients: [String]
    }
);

module.exports.recipesModel = mongoose.model('RecipesModel', recipesSchema);
