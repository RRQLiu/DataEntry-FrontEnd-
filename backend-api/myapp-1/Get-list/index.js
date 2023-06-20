const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const url = 'mongodb://productslist:xmVfMjRPqGS4YyTSkxnoeryLIyp7NhWW5Kp7dC79ENBMy9845ZYODlc6ODPW4N9csBjK6q2T5YOHACDbo3GYWw==@productslist.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productslist@'
const client = new MongoClient(url);

module.exports = async function (context, req) {
 
  await client.connect();
  const database = client.db("warehouse")
  const collection = database.collection("item")

 let mylist = await collection.find({}).toArray();
 
   return (context.res = {
        // status: 200, /* Defaults to 200 */
        body: mylist
    });
};