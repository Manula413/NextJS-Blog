import Link from 'next/link';
import './globals.css';


async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Blog</h1>
      <ul className="space-y-4">
      {posts.map((post: { id: number, title: string }) => (
          <li key={post.id} className="p-4 bg-white shadow rounded-md hover:bg-gray-50">
            <Link href={`/posts/${post.id}`} className="text-lg font-medium text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
