// const express = require('express')
// const app = express()
// const port = 3000
// const bodyParser = require('body-parser');
// const MongoClinet = require('mongodb').MongoClient
// const path = require('path')

// app.set('view engine', 'pug')
// app.use(express.static(`${__dirname}/public/`));
// app.use(bodyParser.urlencoded({extended: true}))

// let db

// app.get('/',(req, res)=> res.send('Hello World'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// MongoClinet.connect('mongodb://Thadeusc:3501Bogan@ds157712.mlab.com:57712/grocerylist', {usernewUrlParser:true}, (err, database) => {
//     if (err) return console.log(err)
//     db = database.db('')
//     app.listen(8080, function () {
//         console.log("listening on port 8080")
//     })
// })
// app.get('/groceries', (req, res) => {
//         res.send("Testing 1,2,3,Testing")
//         })

//         app.post('/groceries', (req, res) => {
            
//             })

// // app.post('/quotes', (req, res) => {
// //     // console.log(req.body)
// //     db.collection('quotes1').save(req.body, (err, result) => {
// //         if (err) return console.log(err)

// //         console.log('save to database :)')
// //         res.redirect('/')
// //     })
// // })