import { connectToDatabase } from "../../../lib/mongodb";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("posts"); 
    
    const posts = await collection.find({}).toArray();
    
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    
    return new Response(JSON.stringify({ message: "Failed to fetch posts" }), { status: 500 });
  }
}

