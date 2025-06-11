"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Captured error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">¡Ups!</h1>
      <p className="text-xl text-gray-800 mb-2">Ocurrió un error inesperado.</p>
      <p className="text-sm text-gray-500 mb-6">
        {error?.message || "Algo salió mal. Intenta recargar la página."}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
