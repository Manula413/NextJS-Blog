'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="text-lg text-gray-800"></div>
        <div className="ml-4 border-t-4 border-blue-600 border-solid w-12 h-12 rounded-full animate-spin"></div>
      </main>
    );
  }

  if (!posts.length) {
    return (
      <main className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="text-lg text-gray-800">No posts available</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: { _id: string; title: string }) => (
          <li key={post._id} className="p-6 bg-white shadow-lg rounded-md hover:bg-gray-50 transition-all duration-200 ease-in-out">
            <Link
              href={`/posts/${post._id}`}
              className="text-xl font-semibold text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
