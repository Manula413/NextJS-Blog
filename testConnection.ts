import { connectToDatabase } from "./lib/mongodb";

const testConnection = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    const db = await connectToDatabase();
    
    // Confirm connection was successful
    console.log("Successfully connected to the database!");
    
    // Attempt to list collections in the database
    console.log("Listing collections...");
    const collections = await db.listCollections().toArray();
    
    // Display the collections retrieved from the database
    console.log("Collections in the database:", collections);

  } catch (error) {
    // Log error details for debugging
    console.error("Database connection failed:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Stack trace:", error.stack);
    } else {
      console.error("Unknown error:", error);
    }
  }
};

testConnection();
