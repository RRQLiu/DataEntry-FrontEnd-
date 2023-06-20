const { MongoClient } = require("mongodb")
const { v4:uuidv4 } = require("uuid")

const url = 'mongodb://productslist:xmVfMjRPqGS4YyTSkxnoeryLIyp7NhWW5Kp7dC79ENBMy9845ZYODlc6ODPW4N9csBjK6q2T5YOHACDbo3GYWw==@productslist.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productslist@'
const client = new MongoClient(url)



let shipment_details = [
    {
        id : uuidv4(),
        date: "Mar 11, 2022",
        warehouseID: "a908cef7-4c67-40f3-88f7-08a03ba4104e",
        shippingPO: "3f7b2654-052d-4a4e-905f-87f22a3877a9",
        shipmentID: "3",
        boxesRcvd: '5'
    },
        {
        id : uuidv4(),
        date: "Mar 10, 2022",
        warehouseID:"a908cef7-4c67-40f3-88f7-08a03ba4104e",
        shippingPO:"71b720e3-2847-45de-bbe7-8fa099d64632",
        shipmentID: "2",
        boxesRcvd: '2'
    },
        {
        id : uuidv4(),
        date: "Mar 9, 2022",
        warehouseID:"a908cef7-4c67-40f3-88f7-08a03ba4104e",
        shippingPO:"81d06bd2-39e3-427c-9fb3-4e217b9a4d60",
        shipmentID: "1",
        boxesRcvd: '12'
    },
    
]



module.exports = async function (context, req) {

    await client.connect();
    const database = client.db("warehouse")
    const collection = database.collection("item")
    await collection.deleteMany({})
    await collection.insertMany(shipment_details);
    
        context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Init is done"
    };
}

