import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 ease-in-out"
        >
          Go back to Homepage
        </Link>
      </div>
    </section>
  );
}
