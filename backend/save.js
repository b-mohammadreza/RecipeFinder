const  fs = require('fs')
const mongoose = require('mongoose')
const recipesModel = require('./recipesSchema').recipesModel

function saveHandler(req, res) {
    console.log(">>>> Save - request received");

    mongoose.connect('mongodb://localhost/recipes-group-2')
        .then(
            () => {
                console.log(">>>> Save - Connected to database");
                fs.readFile('data/recipes.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log(">>>> Save - error reading recipes.json: " + err);
                        return;
                    }

                    let instances = []
                    try {
                        let jsonObj = JSON.parse(data);
                        jsonObj.forEach( (obj,index) => {
                                if (index >= 782) {
                                    return;
                                }

                                instances.push({
                                    name: obj.name,
                                    description: obj.description,
                                    image: obj.image,
                                    cookTime: obj.cookTime,
                                    prepTime: obj.prepTime,
                                    ingredients: obj.ingredients,
                                });
                        });
                    } catch (parseErr) {
                        console.log(">>>> Save - recipes.json parse failed: " + parseErr);
                    }

                    recipesModel.create(instances, null)
                        .then(entries => {
                            // console.log(">>>> Save entries added len: " + entries.length);
                        })
                        .catch(err => {
                            console.log(">>>> Save - error: " + err + ". Failed to save entries");
                        });

                    res.redirect('/');
                });
            }
        )
        .catch(err => {
            console.log(">>>> Save - MongoDB connect: " + err)
        });
}

module.exports.saveHandler = saveHandler;