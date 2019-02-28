const express = require('express');
const bodyParser = require('body-parser');//
const MongoClient = require('mongodb').MongoClient; //connect takes two parameters
const path = require('path');


const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use('/static',express.static('public'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}))

const groceriesRoutes = require('./routes/groceries');

const PORT = process.env.PORT || 3000

app.use('/groceries',groceriesRoutes);
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Orgin','*');
    res.header('Access-Control-Allow-Headers','Orgin, X-Requested-With, Content-Type, Accept');
    next();
});
let db

app.get('/' , (req, res) => {
    res.send({hello: "hello :)"
})


MongoClient.connect('mongodb://Thadeusc:3501Bogan@ds157712.mlab.com:57712/grocerylist', {usernewUrlParser:true}, (err, database) => {
    if (err) return console.log(err)
    db = database.db("grocerylist")
    app.listen(PORT, function () {
        console.log("listening on 3000!")//taking in connection port
    })
}) 

module.exports = app;