'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
          setError('Failed to load posts');
        }
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="border-t-4 border-gray-600 border-solid w-12 h-12 rounded-full animate-spin mb-4"></div>
          <div className="text-lg text-gray-800">Loading posts...</div>
        </div>
      </main>
    );
  }
  

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <div className="text-lg text-gray-800">{error}</div>
      </main>
    );
  }

  if (!posts.length) {
    return (
      <main className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <div className="text-lg text-gray-800">No posts available</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Welcome to the Blog</h1>
      <ul className="space-y-6">
        {posts.map((post: { _id: string; title: string }) => (
          <li key={post._id} className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <Link
              href={`/posts/${post._id}`}
              className="text-xl font-semibold text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
