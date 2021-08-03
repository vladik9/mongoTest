// mongodb module from npm
const mongodb = require("mongodb");
// client conection to db
const MongoClient = mongodb.MongoClient;
//url to the MongoDB
const conectionURL = "mongodb://127.0.0.1:27017"; // the same as localhost "mongodb://127.0.0.1:27017
//database name that will be used in colection name
const databaseName = "myFirstColection";
//connection to the database
MongoClient.connect(conectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("An error occurred");
  }
  console.log("Connection is corect managed");
  //a reference to the the db
  const db = client.db(databaseName);
  //create a colection and insert an element into colection
  db.collection("TestColection").insertOne({ name: "myName", age: 24 });
});
