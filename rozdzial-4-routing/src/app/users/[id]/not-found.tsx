// src/app/users/[id]/not-found.tsx
import Link from "next/link";

export default function UserNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 text-2xl font-bold">
        404
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Nie znaleziono użytkownika
      </h2>
      <p className="text-slate-600 max-w-sm mb-6">
        Użytkownik o podanym identyfikatorze nie istnieje w bazie danych lub został usunięty.
      </p>

      <Link
        href="/users"
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow transition-colors"
      >
        Wróć do listy użytkowników
      </Link>
    </div>
  );
}