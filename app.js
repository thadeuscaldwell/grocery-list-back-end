const express = require('express');
const bodyParser = require('body-parser');//
const MongoClient = require('mongodb').MongoClient; //connect takes two parameters
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


const groceriesRoutes = require('./routes/groceries');

// const PORT = process.env.PORT || 3001

app.use('/groceries',groceriesRoutes);
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
});
var db

app.get('/' , (req, res) => {
    res.send({
        hello: "hello :)"
})
})
// app.post('/groceries', (req, res) => {
//     // console.log(req.body)
//     db.collection('/groceries1').save(req.body, (err, result) => {
//         if (err) return console.log(err)

//         console.log('save to database :)')
//         res.redirect('/')
//     })
// })


MongoClient.connect('mongodb://Thadeusc:3501Bogan@ds157712.mlab.com:57712/grocerylist', {usernewUrlParser:true}, (err, database) => {
    if (err) return console.log(err)
    db = database.db("grocerylist")
    app.listen(process.env.PORT || 3000, function () {
        console.log("listening on 3000!", this.address().port, app.settings.env);//taking in connection port
    })
}) 

module.exports = app;