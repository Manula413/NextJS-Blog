import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <Header />
        <main className="p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
