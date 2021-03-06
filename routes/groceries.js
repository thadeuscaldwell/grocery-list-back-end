const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient

let db

router.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
});

MongoClient.connect('mongodb://Thadeusc:3501Bogan@ds157712.mlab.com:57712/grocerylist', {usernewUrlParser:true}, (err, database) => {
    if (err) return console.log(err)
    db = database.db("grocerylist")
})
 

router.get('/', (req, res) => {
    let cursor = db.collection("groceries1").find().toArray(function (err, result) {
        if (err) {
            return console.log(err)
    }
       res.send(result)
    })
})

router.post('/', (req, res) => {
            console.log(req.body)
    db.collection('groceries1').save(req.body, (err, result) => {
        console.log(req.body)       
        if (err) return console.log(err)
            console.log('save to database :)')
    })
})
router.post('/new',(req , res)=>{
    db.collection('groceries1').save(req.body,(err, result)=>{
    })
})


module.exports = router;