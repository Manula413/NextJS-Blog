import { MongoClient } from "mongodb";

// Ensure the environment variable is not undefined
const client = new MongoClient(process.env.MONGODB_URI as string);

const connectToDatabase = async () => {
  // No need to check isConnected() anymore
  await client.connect();
  return client.db("blogs"); // Use the "blog" database here
};

export { connectToDatabase };
