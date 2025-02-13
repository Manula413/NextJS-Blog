import Link from 'next/link';

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Welcome to the Blog</h1>
      <ul>
        {posts.map((post: { id: number, title: string }) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
