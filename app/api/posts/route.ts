export async function GET() {
    const posts = [
      { id: 1, title: "Getting Started with Next.js", content: "A beginner-friendly guide to Next.js." },
      { id: 2, title: "Understanding App Router", content: "Exploring the new app directory in Next.js 13+." },
      { id: 3, title: "Static vs Server Rendering", content: "When to use static generation vs server-side rendering." }
    ];
  
    return Response.json(posts);
  }
  