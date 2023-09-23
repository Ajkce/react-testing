import { MongoClient } from "mongodb";

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

const uri = `mongodb+srv://ajaya:Ajayakc13101@cluster0.nba51dt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

const client = new MongoClient(uri);

console.log("Trying to connect to db w");

try {
  await client.connect();
  console.log("connected");
  await client.db(dbName).command({ ping: 1 });
  console.log("Connected successfully to server");
} catch (error) {
  console.log("Connection failed connection failed.");
  await client.close();
  console.log("Connection closed.");
}

const database = client.db(dbName);

export default database;
