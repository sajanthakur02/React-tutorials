const { MongoClient } = require("mongodb");

//const url = 'mongodb://localhost:27017'; // Note the correct URL with "mongodb://" prefix
const database = "e-com";
const uri = "mongodb://0.0.0.0:27017/";
// const client = new MongoClient(uri);

const client = new MongoClient(uri);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection('products');
}
module.exports = dbConnect;