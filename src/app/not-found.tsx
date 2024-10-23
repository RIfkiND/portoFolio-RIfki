import Link from "next/link"
export default function NotFound() {
 

  return (
    <div className="flex items-center justify-center h-screen text-center font-mono">
      <div>
        <h1 className="mb-4 text-6xl font-semibold text-blue-500">404</h1>
        <p className="mb-4 text-lg text-gray-600">Oops! Looks like you&apos;re lost.</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Let&apos;s get you back
        </p>
        <Link
          href="/"         
          className="mt-4 px-4 py-2 text-blue-500"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
