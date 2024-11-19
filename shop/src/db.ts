import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

//const url = 'mongodb://localhost:27017';
const uri = "mongodb+srv://meekestmeek:nQTas5EJoQkEJgbZ@cluster0.j6tsj.mongodb.net/"
const dbName = 'shop_db';

export const connectToDatabase = async () => {
  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to database');
  return client.db(dbName);
};