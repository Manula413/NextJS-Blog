# Next.js Blog with MongoDB

This is a **Next.js** project integrated with **MongoDB**, created to learn the basics of both technologies. It is a simple **blog website** that retrieves posts from the database and displays them dynamically.

## Features

- Built with **Next.js** for server-side rendering and static site generation.
- Uses **MongoDB** as the database to store and retrieve blog posts.
- Dynamic routing for individual blog posts.
- Styled using **Tailwind CSS**.
- Implemented **API routes** for fetching data from MongoDB.
- Optimized for performance with Next.js' built-in features.

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up MongoDB
- Create a **MongoDB Atlas** account or use a local MongoDB instance.
- Create a database and a collection for storing blog posts.
- Add a `.env.local` file and define your **MongoDB connection string**:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/
│   ├── page.tsx       # Home page displaying blog posts
│   ├── posts/[id]/    # Dynamic route for individual blog posts
│   ├── api/posts/     # API route to fetch posts from MongoDB
├── components/        # Reusable UI components
├── lib/mongodb.ts     # MongoDB connection logic
├── styles/           # Global styles
├── public/           # Static assets
├── .env.local        # Environment variables (not committed to Git)
├── next.config.js    # Next.js configuration
└── package.json      # Project dependencies
```


## Learn More

To learn more about the technologies used in this project, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Author:** Your Name  
**GitHub:** [yourusername](https://github.com/yourusername)  
**License:** MIT

