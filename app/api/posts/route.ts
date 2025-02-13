import { connectToDatabase } from "../../../lib/mongodb";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("posts"); // Get the posts collection
    console.log("Connected to collection:", collection);  // Log collection object
    const posts = await collection.find({}).toArray();
    console.log("Fetched posts:", posts);
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch posts" }), { status: 500 });
  }
}

