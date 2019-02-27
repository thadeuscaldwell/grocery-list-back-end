const express = require('express');
const router = express.Router();
const app = express();

router.get('/groceries', (req, res) => {
    res.send("Hello Sunshine!")
})

router.post('/groceries', (req, res) => {
            console.log(req.body)
    db.collection('grocerylist').save(req.body, (err, result) => {
            if (err) return console.log(err)
            console.log('save to database :)')
            res.redirect('/')
    })
})


module.exports = router;