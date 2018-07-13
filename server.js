console.log('May Node be with you')
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

var db

//connecting to mongo db instance on mLab
//use express to connect to mongo
MongoClient.connect('mongodb://zubair:zubair86@ds147777.mlab.com:47777/node_todo', (err, client) => {
  if (err) return console.log(err)
  db = client.db('node_todo') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


//endpoint returing /console mongodb document
app.get('/', (req, res) => {
  res.send('Hello World 123')
  db.collection('people').find().toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result)
})
})


//git integration
//vscode troubleshooting - put a breakpoint and see req, res
//node auth0
//understand express /mongoose APIs
//export 
//async calls - promise, fetch
//docker 
//deployment
