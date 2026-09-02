"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Wystąpił błąd:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] gap-4 text-center p-6">
      <h2 className="text-2xl font-bold text-slate-800">Coś poszło nie tak!</h2>
      <p className="text-slate-600 max-w-md">
        {error.message }
      </p>

      <button
        onClick={() => reset()}
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow transition-colors active:scale-95"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}