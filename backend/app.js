
const express = require('express')
const app = express()
const path = require('path');
const saveHandler = require('./save').saveHandler;
const searchHandler = require('./search').searchHandler;


const root = path.join(__dirname, 'client', 'build');
app.use(express.static(root));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});
app.get('/save', (req, res) => saveHandler(req, res));
app.get('/search', (req, res) => searchHandler(req, res));

app.listen(3000, () => console.log('Server ready'))
