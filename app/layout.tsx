export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Next.js Blog</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
