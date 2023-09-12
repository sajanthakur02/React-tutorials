const dbConnect = require('./mongodb');

const deleteRecord = async() =>{
    let data = await dbConnect();
    let result = await data.deleteOne(
        {name : "Max pro 15"}
    )
    console.warn(result);
    if (result.acknowledged) {
        console.log("recoerd deleted");
    }
}

deleteRecord();