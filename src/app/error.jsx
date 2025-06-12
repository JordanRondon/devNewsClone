"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Captured error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-black-600 mb-4">¡Ups!</h1>
      <p className="text-xl text-gray-800 mb-2">
        An unexpected error occurred.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Something went wrong. Try reloading the page.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-black transition"
        >
          Retry
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Return
        </Link>
      </div>
    </div>
  );
}
