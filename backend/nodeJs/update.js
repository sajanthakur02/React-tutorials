const dbConnect = require("./mongodb");

const updateData = async() => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: 'Max 15'},{
            $set: {name: 'Max pro 15'}
        }

    );
    console.warn(result);
}

updateData();