import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <h1 className="text-3xl font-bold">My Next.js Blog</h1>
        </header>
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
