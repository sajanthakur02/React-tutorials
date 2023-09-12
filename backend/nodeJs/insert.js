const dbConnect = require("./mongodb");

const insert = async () => {
    const db = await dbConnect();
    const result = db.insertMany(
        [
            {name: "Nokia lumia 635", brand: "nokia", price: 50, category : "mobile"},
            {name: "Iphone 15", brand: "apple", price: 50, category : "mobile"},
            {name: "Max 15", brand: "micromax", price: 50, category : "mobile"}
        ]
    )
    if (result.acknowledged) {
        console.log("data inserted successfully");
    }
}
insert();