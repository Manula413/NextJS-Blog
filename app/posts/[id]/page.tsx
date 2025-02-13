import { notFound } from "next/navigation";
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb"; 


async function getPost(id: string) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("posts");

    const post = await collection.findOne({ _id: new ObjectId(id) });
    return post;
  } catch (error) {
  
    return null;
  }
}


export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await getPost(params.id);

  if (!post) return { title: "Post Not Found" };

  return { title: post.title };
}

function formatContent(content: string) {
  return content.split("\n").map((line, index) => (
    <p key={index} className="text-lg text-gray-700 mb-4">{line}</p>
  ));
}


export default async function PostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await getPost(params.id);

  if (!post) return notFound(); 

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8">
          {post.title}
        </h1>

        {/* Content Section */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {formatContent(post.content)}
        </div>

        {/* Optional: Add some interactive elements like a share button */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 transition duration-300">
            Share this post
          </button>
          <button className="text-sm text-white bg-gray-500 hover:bg-gray-600 rounded-lg px-4 py-2 transition duration-300">
            Back to Posts
          </button>
        </div>
      </div>
    </section>
  );
}
