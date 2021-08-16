//mongoose module for NodeJs // npm i mongoose
const mongoose = require("mongoose");
//mongose db to localhost
mongoose.connect("mongodb://localhost:27017/CVDB", {
  useNewUrlParser: true, // use params to pass deprication
  useUnifiedTopology: true,
});

// create a user schema in our detabase
const userSchema = new mongoose.Schema({ name: String, id: Number });
//initilization of a model for all new users obje cts

const modelUser = mongoose.model("User", userSchema);
// initializaiton of a new user using model created before
const User1 = new modelUser({ name: "Jo", id: 1 });

// save method only one record
User1.save((err) => {
   if (err) console.log(err);
   else {
    console.log("Succes User1");   }
 });
// insertin an arr of  records in the database
// const User1 = new modelUser({ name: "Jo0", id: 1 });
// const User2 = new modelUser({ name: "Jo00", id: 2 });
// const User3 = new modelUser({ name: "Jo000", id: 3 });
// const User4 = new modelUser({ name: "Jo0000", id: 4 });
// const arr = [User1, User2, User3, User4];
//for saving many records in the same time is used insert many function and accepts an array of objects
// modelUser.insertMany(arr, (err) => {
//   if (err) {
//     console.log(err);
//   } else
//     console.log(
//       `Succes adding ${arr[0].id} ${arr[1].id} ${arr[2].id} ${arr[3].id}`
//     );
// });

//read from db and print it on the console called it items

// modelUser.find((err, items) => {
//   if (!err) {
//     items.forEach((item) => console.log(item.name));
//   } else console.log(err);
// });

// close the connection to database

// mongoose.connection.close();

// validation of entred data in mongoose is helping
//to providing a bad data to our table collection

// const newSchema = new mongoose.Schema({
//   name: { type: String, required: [true, "It' required"] },
// });

//update one item in a database collection

// modelUser.updateOne({ id: 1 }, { id: 0 }, (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("Succes!");
// });

//for embemded relation

//mongoose module for NodeJs // npm i mongoose
// const mongoose = require("mongoose");
//mongose db to localhost
// mongoose.connect("mongodb://localhost:27017/SocialRelation", {
//   useNewUrlParser: true, // use params to pass deprication
//   useUnifiedTopology: true,
// });

// const man = new mongoose.Schema({ name: String, sex: String });
// const woman = new mongoose.Schema({ name: String, sex: String, partener: man });

// const Man = mongoose.model("Man", man);
// const Woman = mongoose.model("Woman", woman);

// const Jo = new Man({ name: "Jo", sex: "M" });
// const Ann = new Woman({ name: "Ann", sex: "F", partener: Jo });

// Jo.save();
// Ann.save();

// Woman.find((err, item) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(item);
//   }
// });
