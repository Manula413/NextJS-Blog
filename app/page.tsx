"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched posts from API:", data); // Debugging output
          setPosts(data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  if (!posts.length) {
    return <div>No posts available</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: { _id: string; title: string }) => (
          <li key={post._id} className="p-4 bg-white shadow rounded-md hover:bg-gray-50">
            <Link href={`/posts/${post._id}`} className="text-lg font-medium text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
