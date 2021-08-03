// mongodb module from npm
const mongodb = require("mongodb");
// client conection to db
const MongoClient = mongodb.MongoClient;
//url to the MongoDB
const conectionURL = "mongodb://127.0.0.1:27017"; // the same as localhost "mongodb://127.0.0.1:27017
//database name that will be used in colection name
const databaseName = "myFirstColection";
//to generate an id by own we can use a function
//######################
// const {MongoClient,ObjectId} = require('mongodb')
// const id = new ObjectId(); // to grab an id
// console.log(id);
//######################
//connection to the database
MongoClient.connect(conectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("An error occurred");
  }
  console.log("Connection is corect managed");
  //a reference to the the db
  const db = client.db(databaseName);
  //create a colection and insert an element into colection
  //db.collection("TestColection").insertOne({ name: "myName", age: 24 });

  // for insert many elements into db we need an arr of objects
  //we can create direct inside function or outside
  const arrObject = [
    { Name: "myName1", age: 25 },
    { Name: "myName2", age: 26 },
  ];
  //inserting many records in a colection table
  db.collection("TestColection").insertMany(arrObject, (err) => {
    //checking if an error
    if (err) console.log(err);
    else console.log("succes added records");
  });

  //for read from database
  //we need to provide a model for searching
  db.collection("TestColection").findOne(
    { Name: "myName1" },
    (err, results) => {
      if (err) console.log(err);
      else console.log(results);
    }
  );
});
