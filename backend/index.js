// secon part sign up api
const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/user");
const app = express();

// use midlerware
app.use(express.json());
app.use(cors());

// create route to insert the data in database using api
app.post("/register", async (req, resp) => {
  let users = new User(req.body);
  let result = await users.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

// first part to create a connection
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const connectDB = async () =>{
//     // enter the connection root path
//     mongoose.connect('mongodb://0.0.0.0:27017/e-com');

//     // define a schema when you insert, update, delete opration
//     const productScheema = new mongoose.Schema({});

//     // model get the data which is define the schema
//     const product =  mongoose.model('products', productScheema);
//     const data = await product.find();
//     console.log(data);
// }
// connectDB();

// check app is working
// app.get("/",(req, resp) => {
//     resp.send("app is working");
// });

app.listen(5000);
