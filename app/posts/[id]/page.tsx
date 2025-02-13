import { notFound } from "next/navigation";


// Fetch the data for a post by its ID
async function getPost(id: number) {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return posts.find((post: { id: number }) => post.id === id);
}

// Await params properly before using them in `generateMetadata`
export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await getPost(Number(params.id));

  if (!post) return { title: "Post Not Found" };

  return { title: post.title };
}

export default async function PostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  // Await params first before accessing it
  const post = await getPost(Number(params.id));

  if (!post) return notFound(); // Show a 404 page if post doesn't exist

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{post.title}</h2></div>
      <p className="text-lg text-gray-700">{post.content}</p>
    

    </section>

    
  );
}
