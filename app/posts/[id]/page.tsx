import { notFound } from "next/navigation";
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb"; // Import ObjectId for MongoDB

// Fetch a single post by ID
async function getPost(id: string) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("posts");
    // Use ObjectId to find the post by its MongoDB _id
    const post = await collection.findOne({ _id: new ObjectId(id) });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate metadata for the page (used for SEO and title)
export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await getPost(params.id);

  if (!post) return { title: "Post Not Found" };

  return { title: post.title };
}

// PostPage component to display individual post
export default async function PostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await getPost(params.id);

  if (!post) return notFound(); // Return 404 if post is not found

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{post.title}</h2>
      </div>
      <p className="text-lg text-gray-700">{post.content}</p>
    </section>
  );
}
