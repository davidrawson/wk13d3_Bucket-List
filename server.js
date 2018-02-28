const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));


MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if (err){
    console.log(err);
    return;
  }
  const db = client.db('bucket_list');
  console.log("Connected to db.");

  // CREATE
  server.post('/api/bucketList', function(req, res){
    const bucketList = db.collection('bucketList');
    const itemToSave = req.body;

    bucketList.save(itemToSave, function(err, result){
      if (err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(201);
      res.json(result.ops[0]);  // I don't know what .ops[0] does.
      console.log('Saved to db');
    })
  })

  // INDEX
  server.get('/api/bucketList', function(req, res){
    const bucketList = db.collection('bucketList');
    bucketList.find().toArray(function(err, allList){
      if (err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(allList);
    })
  })


  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });

});
