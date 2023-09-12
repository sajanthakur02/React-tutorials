const dbConnect = require("./mongodb");
// const express = require('express');

// const app = express();

// app.get("/",(req, resp) => {
//     resp.send("app is working");
// });

// app.listen(5000);


// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data)
//     });
// });

// latest code
const main = async() => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();